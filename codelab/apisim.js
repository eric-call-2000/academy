/* ============================================================
   apisim.js — a small GraphQL executor and an OpenAPI / JSON Schema
   checker, inside one lesson Worker (Advanced API Design, units 8–10).

   A GraphQL lesson without an executor is a quiz about syntax, and a
   contract lesson without a schema checker is a regex over a document.
   This gives `apisim: true` lessons both. runner.js copies the one
   function below into the Worker source (it must stay self-contained: no
   references to anything outside it), and tools/test-apisim.js runs it in
   Node as the contract.

   GraphQL, following the October 2021 specification and the messages
   graphql-js 16 prints:
     gqlParse(src)       executable document → AST (shape below)
     gqlSchema(sdl)      type / input / enum / scalar / schema definitions
     graphql({ typeDefs | schema, resolvers, query, variables,
               operationName, context, rootValue })  → Promise<{ errors?, data? }>
     GraphQLError        throw new GraphQLError(msg, { extensions })
   Validated before execution: unknown fields, leaf / non-leaf selections,
   unknown and missing required arguments, argument literals, undefined
   variables, unknown fragments and directives, fragment cycles, fragment
   type conditions, and missing root types. Executed per the spec: sibling
   fields and list items are all STARTED before any is awaited (so a
   DataLoader batches exactly as it does in graphql-js), mutation root
   fields run one after another, resolvers get (parent, args, context,
   info), results are coerced to their scalar or enum, and an error nulls
   its field — or, through non-null types, the nearest nullable ancestor.
   Not modelled: interfaces, unions, subscriptions, introspection beyond
   __typename, custom scalar coercion, field-merge conflicts, unused
   variable/fragment rules, error locations.

   AST: Document { kind, definitions }
     OperationDefinition { kind, operation, name, variableDefinitions
       [{ name, type, defaultValue }], directives, selectionSet }
     FragmentDefinition { kind, name, typeCondition, directives, selectionSet }
     SelectionSet { kind, selections }
     Field { kind, alias, name, arguments [{ name, value }], directives,
       selectionSet (null on a leaf) }
     FragmentSpread { kind, name, directives }
     InlineFragment { kind, typeCondition (or null), directives, selectionSet }
     directives [{ name, arguments }]
     values: Variable { name } Int Float String Boolean { value } Null
       Enum { value } List { values } Object { fields [{ name, value }] }
     types: NamedType { name } ListType { type } NonNullType { type }

   Contracts, following JSON Schema 2020-12 and OpenAPI 3.1:
     checkSchema(schema, value, root)  → [{ pointer, message }], RFC 6901
       pointers ("" is the whole value). Keywords: type (incl. a list),
       enum, const, minLength, maxLength, pattern, minimum, maximum,
       exclusiveMinimum, exclusiveMaximum, required, properties,
       additionalProperties, items, minItems, maxItems, and $ref resolved
       against root. A type mismatch stops the other keywords for that value.
     oasFind(spec, method, path)       → { template, operation, params,
       allowed } | null. Whole-segment {params}; a concrete path beats a
       template; operation is null when the path exists but the method does
       not (allowed lists the methods that do).
   ============================================================ */
window.CODELAB_APISIM = function apisim(g) {

  /* ================= lexer ================= */
  function syntaxError(msg) { return new Error("Syntax Error: " + msg); }

  function lex(src) {
    src = String(src);
    var toks = [], i = 0, n = src.length;
    function push(kind, value) { toks.push({ kind: kind, value: value }); }
    while (i < n) {
      var c = src[i];
      if (c === " " || c === "\t" || c === "\n" || c === "\r" || c === "," || c === "﻿") { i++; continue; }
      if (c === "#") { while (i < n && src[i] !== "\n" && src[i] !== "\r") i++; continue; }
      if ("!$&()=:@[]{}|".indexOf(c) !== -1) { push("Punct", c); i++; continue; }
      if (c === ".") {
        if (src.substr(i, 3) === "...") { push("Punct", "..."); i += 3; continue; }
        throw syntaxError('Unexpected character: ".".');
      }
      if (/[_A-Za-z]/.test(c)) {
        var j = i + 1;
        while (j < n && /[_0-9A-Za-z]/.test(src[j])) j++;
        push("Name", src.slice(i, j)); i = j; continue;
      }
      if (c === "-" || /[0-9]/.test(c)) {
        var m = /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?/.exec(src.slice(i));
        if (!m) throw syntaxError("Invalid number.");
        if (i + m[0].length < n && /[_A-Za-z.]/.test(src[i + m[0].length])) throw syntaxError("Invalid number, unexpected character after " + m[0] + ".");
        push(m[2] || m[3] ? "Float" : "Int", Number(m[0])); i += m[0].length; continue;
      }
      if (c === '"') {
        if (src.substr(i, 3) === '"""') {
          var end = i + 3, raw = "";
          while (true) {
            if (end >= n) throw syntaxError("Unterminated string.");
            if (src.substr(end, 4) === '\\"""') { raw += '"""'; end += 4; continue; }
            if (src.substr(end, 3) === '"""') break;
            raw += src[end]; end++;
          }
          push("String", blockString(raw)); i = end + 3; continue;
        }
        var k = i + 1, out = "";
        while (true) {
          if (k >= n || src[k] === "\n" || src[k] === "\r") throw syntaxError("Unterminated string.");
          var ch = src[k];
          if (ch === '"') break;
          if (ch === "\\") {
            var e = src[k + 1];
            var map = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t" };
            if (e === "u") {
              var hex = src.substr(k + 2, 4);
              if (!/^[0-9a-fA-F]{4}$/.test(hex)) throw syntaxError("Invalid Unicode escape sequence.");
              out += String.fromCharCode(parseInt(hex, 16)); k += 6; continue;
            }
            if (!(e in map)) throw syntaxError("Invalid character escape sequence: \\" + e + ".");
            out += map[e]; k += 2; continue;
          }
          out += ch; k++;
        }
        push("String", out); i = k + 1; continue;
      }
      throw syntaxError("Unexpected character: " + JSON.stringify(c) + ".");
    }
    push("EOF", null);
    return toks;
  }

  function blockString(raw) {
    var lines = raw.split(/\r\n|\n|\r/), common = null;
    for (var i = 1; i < lines.length; i++) {
      var indent = /^[ \t]*/.exec(lines[i])[0].length;
      if (indent < lines[i].length && (common === null || indent < common)) common = indent;
    }
    if (common) for (var j = 1; j < lines.length; j++) lines[j] = lines[j].slice(common);
    while (lines.length && /^[ \t]*$/.test(lines[0])) lines.shift();
    while (lines.length && /^[ \t]*$/.test(lines[lines.length - 1])) lines.pop();
    return lines.join("\n");
  }

  function describe(t) {
    if (t.kind === "EOF") return "<EOF>";
    if (t.kind === "Punct") return '"' + t.value + '"';
    return t.kind + ' "' + t.value + '"';
  }

  function Parser(src) {
    var toks = lex(src), pos = 0;
    var P = {
      peek: function () { return toks[pos]; },
      next: function () { return toks[pos++]; },
      isPunct: function (v) { return toks[pos].kind === "Punct" && toks[pos].value === v; },
      isName: function (v) { return toks[pos].kind === "Name" && (v === undefined || toks[pos].value === v); },
      expectPunct: function (v) {
        if (!P.isPunct(v)) throw syntaxError('Expected "' + v + '", found ' + describe(toks[pos]) + ".");
        return toks[pos++];
      },
      expectName: function (v) {
        if (!P.isName(v)) throw syntaxError("Expected " + (v ? '"' + v + '"' : "Name") + ", found " + describe(toks[pos]) + ".");
        return toks[pos++].value;
      },
      unexpected: function () { throw syntaxError("Unexpected " + describe(toks[pos]) + "."); }
    };
    return P;
  }

  /* ================= executable documents ================= */
  function parseType(P) {
    var t;
    if (P.isPunct("[")) {
      P.next();
      t = { kind: "ListType", type: parseType(P) };
      P.expectPunct("]");
    } else {
      t = { kind: "NamedType", name: P.expectName() };
    }
    if (P.isPunct("!")) { P.next(); t = { kind: "NonNullType", type: t }; }
    return t;
  }

  function parseValue(P) {
    var t = P.peek();
    if (t.kind === "Punct" && t.value === "$") { P.next(); return { kind: "Variable", name: P.expectName() }; }
    if (t.kind === "Int") { P.next(); return { kind: "Int", value: t.value }; }
    if (t.kind === "Float") { P.next(); return { kind: "Float", value: t.value }; }
    if (t.kind === "String") { P.next(); return { kind: "String", value: t.value }; }
    if (t.kind === "Name") {
      P.next();
      if (t.value === "true" || t.value === "false") return { kind: "Boolean", value: t.value === "true" };
      if (t.value === "null") return { kind: "Null" };
      return { kind: "Enum", value: t.value };
    }
    if (P.isPunct("[")) {
      P.next();
      var values = [];
      while (!P.isPunct("]")) { if (P.peek().kind === "EOF") P.unexpected(); values.push(parseValue(P)); }
      P.next();
      return { kind: "List", values: values };
    }
    if (P.isPunct("{")) {
      P.next();
      var fields = [];
      while (!P.isPunct("}")) {
        var name = P.expectName();
        P.expectPunct(":");
        fields.push({ name: name, value: parseValue(P) });
      }
      P.next();
      return { kind: "Object", fields: fields };
    }
    return P.unexpected();
  }

  function parseArguments(P) {
    var args = [];
    if (!P.isPunct("(")) return args;
    P.next();
    if (P.isPunct(")")) P.unexpected();
    while (!P.isPunct(")")) {
      var name = P.expectName();
      P.expectPunct(":");
      args.push({ name: name, value: parseValue(P) });
    }
    P.next();
    return args;
  }

  function parseDirectives(P) {
    var out = [];
    while (P.isPunct("@")) {
      P.next();
      out.push({ name: P.expectName(), arguments: parseArguments(P) });
    }
    return out;
  }

  function parseSelectionSet(P) {
    P.expectPunct("{");
    if (P.isPunct("}")) P.unexpected();
    var selections = [];
    while (!P.isPunct("}")) {
      if (P.peek().kind === "EOF") P.expectPunct("}");
      selections.push(parseSelection(P));
    }
    P.next();
    return { kind: "SelectionSet", selections: selections };
  }

  function parseSelection(P) {
    if (P.isPunct("...")) {
      P.next();
      if (P.isName() && !P.isName("on")) {
        return { kind: "FragmentSpread", name: P.expectName(), directives: parseDirectives(P) };
      }
      var typeCondition = null;
      if (P.isName("on")) { P.next(); typeCondition = P.expectName(); }
      var dirs = parseDirectives(P);
      return { kind: "InlineFragment", typeCondition: typeCondition, directives: dirs, selectionSet: parseSelectionSet(P) };
    }
    var first = P.expectName(), alias = null, name = first;
    if (P.isPunct(":")) { P.next(); alias = first; name = P.expectName(); }
    var args = parseArguments(P);
    var directives = parseDirectives(P);
    var selectionSet = P.isPunct("{") ? parseSelectionSet(P) : null;
    return { kind: "Field", alias: alias, name: name, arguments: args, directives: directives, selectionSet: selectionSet };
  }

  function gqlParse(src) {
    var P = Parser(src), definitions = [];
    if (P.peek().kind === "EOF") throw syntaxError("Unexpected <EOF>.");
    while (P.peek().kind !== "EOF") {
      if (P.isPunct("{")) {
        definitions.push({ kind: "OperationDefinition", operation: "query", name: null, variableDefinitions: [], directives: [], selectionSet: parseSelectionSet(P) });
      } else if (P.isName("query") || P.isName("mutation") || P.isName("subscription")) {
        var operation = P.next().value, name = null;
        if (P.isName()) name = P.expectName();
        var vars = [];
        if (P.isPunct("(")) {
          P.next();
          while (!P.isPunct(")")) {
            P.expectPunct("$");
            var vname = P.expectName();
            P.expectPunct(":");
            var vtype = parseType(P), def = null;
            if (P.isPunct("=")) { P.next(); def = parseValue(P); }
            vars.push({ name: vname, type: vtype, defaultValue: def });
          }
          P.next();
        }
        var directives = parseDirectives(P);
        definitions.push({ kind: "OperationDefinition", operation: operation, name: name, variableDefinitions: vars, directives: directives, selectionSet: parseSelectionSet(P) });
      } else if (P.isName("fragment")) {
        P.next();
        if (P.isName("on")) P.unexpected();
        var fname = P.expectName();
        P.expectName("on");
        var cond = P.expectName();
        var fdirs = parseDirectives(P);
        definitions.push({ kind: "FragmentDefinition", name: fname, typeCondition: cond, directives: fdirs, selectionSet: parseSelectionSet(P) });
      } else {
        P.unexpected();
      }
    }
    return { kind: "Document", definitions: definitions };
  }

  /* ================= schema (SDL) ================= */
  var SCALARS = ["ID", "Int", "Float", "String", "Boolean"];

  function typeStr(t) {
    if (t.kind === "NonNullType") return typeStr(t.type) + "!";
    if (t.kind === "ListType") return "[" + typeStr(t.type) + "]";
    return t.name;
  }
  function namedOf(t) { while (t.kind !== "NamedType") t = t.type; return t.name; }

  function gqlSchema(sdl) {
    var P = Parser(sdl);
    var types = {}, rootOps = null;
    SCALARS.forEach(function (s) { types[s] = { kind: "SCALAR", name: s }; });
    function skipDescription() { if (P.peek().kind === "String") P.next(); }
    function define(t) {
      if (types[t.name] && !(types[t.name].kind === "SCALAR" && SCALARS.indexOf(t.name) !== -1 && false)) {
        throw new Error('There can be only one type named "' + t.name + '".');
      }
      types[t.name] = t;
    }
    function parseInputValues(close) {
      var out = {};
      while (!P.isPunct(close)) {
        skipDescription();
        var name = P.expectName();
        P.expectPunct(":");
        var type = parseType(P), def;
        if (P.isPunct("=")) { P.next(); def = parseValue(P); }
        parseDirectives(P);
        out[name] = { name: name, type: type, defaultValue: def };
      }
      P.next();
      return out;
    }
    while (P.peek().kind !== "EOF") {
      skipDescription();
      var kw = P.expectName();
      if (kw === "type") {
        var tname = P.expectName();
        if (P.isName("implements")) throw new Error("apisim does not support interfaces (type " + tname + " implements …)");
        parseDirectives(P);
        P.expectPunct("{");
        var fields = {};
        while (!P.isPunct("}")) {
          skipDescription();
          var fname = P.expectName(), args = {};
          if (P.isPunct("(")) { P.next(); args = parseInputValues(")"); }
          P.expectPunct(":");
          var ftype = parseType(P);
          parseDirectives(P);
          fields[fname] = { name: fname, type: ftype, args: args };
        }
        P.next();
        define({ kind: "OBJECT", name: tname, fields: fields });
      } else if (kw === "input") {
        var iname = P.expectName();
        parseDirectives(P);
        P.expectPunct("{");
        define({ kind: "INPUT_OBJECT", name: iname, fields: parseInputValues("}") });
      } else if (kw === "enum") {
        var ename = P.expectName(), values = [];
        parseDirectives(P);
        P.expectPunct("{");
        while (!P.isPunct("}")) { skipDescription(); values.push(P.expectName()); parseDirectives(P); }
        P.next();
        define({ kind: "ENUM", name: ename, values: values });
      } else if (kw === "scalar") {
        var sname = P.expectName();
        parseDirectives(P);
        define({ kind: "SCALAR", name: sname });
      } else if (kw === "schema") {
        parseDirectives(P);
        P.expectPunct("{");
        rootOps = {};
        while (!P.isPunct("}")) { var op = P.expectName(); P.expectPunct(":"); rootOps[op] = P.expectName(); }
        P.next();
      } else if (kw === "interface" || kw === "union" || kw === "extend" || kw === "directive") {
        throw new Error('apisim does not support "' + kw + '" definitions');
      } else {
        throw syntaxError('Unexpected Name "' + kw + '".');
      }
    }
    var schema = { types: types, queryType: null, mutationType: null };
    var q = rootOps ? rootOps.query : (types.Query ? "Query" : null);
    var mu = rootOps ? rootOps.mutation : (types.Mutation ? "Mutation" : null);
    function need(name) {
      if (!types[name]) throw new Error('Unknown type "' + name + '".');
      return types[name];
    }
    Object.keys(types).forEach(function (k) {
      var t = types[k];
      if (t.kind === "OBJECT") Object.keys(t.fields).forEach(function (f) {
        var fd = t.fields[f], ft = need(namedOf(fd.type));
        if (ft.kind === "INPUT_OBJECT") throw new Error("The type of " + t.name + "." + f + " must be Output Type but got: " + typeStr(fd.type) + ".");
        Object.keys(fd.args).forEach(function (a) {
          var at = need(namedOf(fd.args[a].type));
          if (at.kind === "OBJECT") throw new Error("The type of " + t.name + "." + f + "(" + a + ":) must be an input type but got: " + typeStr(fd.args[a].type) + ".");
        });
      });
      if (t.kind === "INPUT_OBJECT") Object.keys(t.fields).forEach(function (f) {
        var it = need(namedOf(t.fields[f].type));
        if (it.kind === "OBJECT") throw new Error("The type of " + t.name + "." + f + " must be an input type but got: " + typeStr(t.fields[f].type) + ".");
      });
    });
    if (!q) throw new Error("Schema must define a Query type.");
    if (need(q).kind !== "OBJECT") throw new Error("Query root type must be an object type.");
    schema.queryType = q;
    if (mu) { if (need(mu).kind !== "OBJECT") throw new Error("Mutation root type must be an object type."); schema.mutationType = mu; }
    return schema;
  }

  /* ================= input values ================= */
  function inspect(v) {
    if (typeof v === "number" || typeof v === "boolean" || v === null || v === undefined) return String(v);
    return JSON.stringify(v);
  }
  function printValue(node) {
    switch (node.kind) {
      case "String": return JSON.stringify(node.value);
      case "Int": case "Float": return String(node.value);
      case "Boolean": return node.value ? "true" : "false";
      case "Null": return "null";
      case "Enum": return node.value;
      case "Variable": return "$" + node.name;
      case "List": return "[" + node.values.map(printValue).join(", ") + "]";
      case "Object": return "{ " + node.fields.map(function (f) { return f.name + ": " + printValue(f.value); }).join(", ") + " }";
    }
    return "?";
  }
  function isInt32(v) { return Number.isInteger(v) && v <= 2147483647 && v >= -2147483648; }

  /* A message when the literal can't be a value of the type, else null.
     Variables are checked when their value arrives. */
  function literalError(schema, type, node) {
    if (node.kind === "Variable") return null;
    if (type.kind === "NonNullType") {
      if (node.kind === "Null") return 'Expected value of type "' + typeStr(type) + '", found null.';
      return literalError(schema, type.type, node);
    }
    if (node.kind === "Null") return null;
    if (type.kind === "ListType") {
      if (node.kind === "List") {
        for (var i = 0; i < node.values.length; i++) { var e = literalError(schema, type.type, node.values[i]); if (e) return e; }
        return null;
      }
      return literalError(schema, type.type, node);
    }
    var t = schema.types[type.name];
    if (t.kind === "INPUT_OBJECT") {
      if (node.kind !== "Object") return 'Expected value of type "' + t.name + '", found ' + printValue(node) + ".";
      for (var j = 0; j < node.fields.length; j++) {
        var fd = t.fields[node.fields[j].name];
        if (!fd) return 'Field "' + node.fields[j].name + '" is not defined by type "' + t.name + '".';
        var fe = literalError(schema, fd.type, node.fields[j].value);
        if (fe) return fe;
      }
      var names = node.fields.map(function (f) { return f.name; });
      var keys = Object.keys(t.fields);
      for (var k = 0; k < keys.length; k++) {
        var f = t.fields[keys[k]];
        if (f.type.kind === "NonNullType" && f.defaultValue === undefined && names.indexOf(keys[k]) === -1)
          return 'Field "' + t.name + "." + keys[k] + '" of required type "' + typeStr(f.type) + '" was not provided.';
      }
      return null;
    }
    if (t.kind === "ENUM") {
      if (node.kind !== "Enum") return 'Enum "' + t.name + '" cannot represent non-enum value: ' + printValue(node) + ".";
      if (t.values.indexOf(node.value) === -1) return 'Value "' + node.value + '" does not exist in "' + t.name + '" enum.';
      return null;
    }
    switch (t.name) {
      case "Int":
        if (node.kind === "Int" && isInt32(node.value)) return null;
        if (node.kind === "Int") return "Int cannot represent non 32-bit signed integer value: " + node.value;
        return "Int cannot represent non-integer value: " + printValue(node);
      case "Float":
        return node.kind === "Int" || node.kind === "Float" ? null : "Float cannot represent non numeric value: " + printValue(node);
      case "String":
        return node.kind === "String" ? null : "String cannot represent a non string value: " + printValue(node);
      case "Boolean":
        return node.kind === "Boolean" ? null : "Boolean cannot represent a non boolean value: " + printValue(node);
      case "ID":
        return node.kind === "String" || node.kind === "Int" ? null : "ID cannot represent a non-string and non-integer value: " + printValue(node);
    }
    return null;   // a custom scalar accepts any literal
  }

  /* An AST literal (already validated) → a JS value. A variable with no
     value is undefined, so the caller can fall back to a default. */
  function valueFromAST(schema, type, node, vars) {
    if (node.kind === "Variable") return vars[node.name];
    if (type.kind === "NonNullType") return valueFromAST(schema, type.type, node, vars);
    if (node.kind === "Null") return null;
    if (type.kind === "ListType") {
      if (node.kind === "List") return node.values.map(function (v) { return valueFromAST(schema, type.type, v, vars); });
      return [valueFromAST(schema, type.type, node, vars)];
    }
    var t = schema.types[type.name];
    if (t.kind === "INPUT_OBJECT") {
      var out = {};
      Object.keys(t.fields).forEach(function (k) {
        var f = t.fields[k], given = null;
        node.fields.forEach(function (x) { if (x.name === k) given = x; });
        var v = given ? valueFromAST(schema, f.type, given.value, vars) : undefined;
        if (v === undefined && f.defaultValue !== undefined) v = valueFromAST(schema, f.type, f.defaultValue, vars);
        if (v !== undefined) out[k] = v;
      });
      return out;
    }
    if (t.name === "ID") return String(node.value);
    if (node.kind === "List") return node.values.map(function (v) { return valueFromAST(schema, { kind: "NamedType", name: t.name }, v, vars); });
    if (node.kind === "Object") { var o = {}; node.fields.forEach(function (f) { o[f.name] = valueFromAST(schema, { kind: "NamedType", name: t.name }, f.value, vars); }); return o; }
    return node.value;
  }

  /* A JS value (a variable) → its coerced value, or a thrown reason. */
  function coerceInput(schema, type, value) {
    if (type.kind === "NonNullType") {
      if (value === null || value === undefined) throw new Error('Expected non-nullable type "' + typeStr(type) + '" not to be null.');
      return coerceInput(schema, type.type, value);
    }
    if (value === null || value === undefined) return null;
    if (type.kind === "ListType") {
      if (Array.isArray(value)) return value.map(function (v) { return coerceInput(schema, type.type, v); });
      return [coerceInput(schema, type.type, value)];
    }
    var t = schema.types[type.name];
    if (t.kind === "INPUT_OBJECT") {
      if (typeof value !== "object" || Array.isArray(value)) throw new Error('Expected type "' + t.name + '" to be an object.');
      Object.keys(value).forEach(function (k) { if (!t.fields[k]) throw new Error('Field "' + k + '" is not defined by type "' + t.name + '".'); });
      var out = {};
      Object.keys(t.fields).forEach(function (k) {
        var f = t.fields[k];
        if (value[k] === undefined) {
          if (f.defaultValue !== undefined) out[k] = valueFromAST(schema, f.type, f.defaultValue, {});
          else if (f.type.kind === "NonNullType") throw new Error('Field "' + k + '" of required type "' + typeStr(f.type) + '" was not provided.');
          return;
        }
        out[k] = coerceInput(schema, f.type, value[k]);
      });
      return out;
    }
    if (t.kind === "ENUM") {
      if (typeof value !== "string" || t.values.indexOf(value) === -1) throw new Error("Value " + inspect(value) + ' does not exist in "' + t.name + '" enum.');
      return value;
    }
    switch (t.name) {
      case "Int":
        if (typeof value === "number" && Number.isInteger(value)) {
          if (!isInt32(value)) throw new Error("Int cannot represent non 32-bit signed integer value: " + value);
          return value;
        }
        throw new Error("Int cannot represent non-integer value: " + inspect(value));
      case "Float":
        if (typeof value === "number" && isFinite(value)) return value;
        throw new Error("Float cannot represent non numeric value: " + inspect(value));
      case "String":
        if (typeof value === "string") return value;
        throw new Error("String cannot represent a non string value: " + inspect(value));
      case "Boolean":
        if (typeof value === "boolean") return value;
        throw new Error("Boolean cannot represent a non boolean value: " + inspect(value));
      case "ID":
        if (typeof value === "string") return value;
        if (Number.isInteger(value)) return String(value);
        throw new Error("ID cannot represent value: " + inspect(value));
    }
    return value;
  }

  /* A resolved value → its scalar or enum result, or a thrown error. */
  function serialize(t, v) {
    if (t.kind === "ENUM") {
      if (typeof v === "string" && t.values.indexOf(v) !== -1) return v;
      throw new Error('Enum "' + t.name + '" cannot represent value: ' + inspect(v));
    }
    switch (t.name) {
      case "Int": {
        var n = typeof v === "boolean" ? (v ? 1 : 0) : (typeof v === "string" && v !== "" && !isNaN(Number(v)) ? Number(v) : v);
        if (typeof n !== "number" || !Number.isInteger(n)) throw new Error("Int cannot represent non-integer value: " + inspect(v));
        if (!isInt32(n)) throw new Error("Int cannot represent non 32-bit signed integer value: " + inspect(v));
        return n;
      }
      case "Float": {
        var f = typeof v === "boolean" ? (v ? 1 : 0) : (typeof v === "string" && v !== "" && !isNaN(Number(v)) ? Number(v) : v);
        if (typeof f !== "number" || !isFinite(f)) throw new Error("Float cannot represent non numeric value: " + inspect(v));
        return f;
      }
      case "String":
        if (typeof v === "string") return v;
        if (typeof v === "boolean") return v ? "true" : "false";
        if (typeof v === "number" && isFinite(v)) return String(v);
        throw new Error("String cannot represent value: " + inspect(v));
      case "Boolean":
        if (typeof v === "boolean") return v;
        if (typeof v === "number" && isFinite(v)) return v !== 0;
        throw new Error("Boolean cannot represent a non boolean value: " + inspect(v));
      case "ID":
        if (typeof v === "string") return v;
        if (Number.isInteger(v)) return String(v);
        throw new Error("ID cannot represent value: " + inspect(v));
    }
    return v;   // a custom scalar passes through
  }

  /* ================= validation ================= */
  var TYPENAME = { name: "__typename", type: { kind: "NonNullType", type: { kind: "NamedType", name: "String" } }, args: {} };
  var DIRECTIVES = { skip: true, include: true };

  function validateDocument(schema, doc) {
    var errors = [];
    var fragments = {};
    doc.definitions.forEach(function (d) { if (d.kind === "FragmentDefinition") fragments[d.name] = d; });

    /* cycles: walk spreads from each fragment */
    var reported = {};
    Object.keys(fragments).forEach(function (start) {
      (function walk(name, trail) {
        var f = fragments[name];
        if (!f) return;
        spreadsIn(f.selectionSet).forEach(function (s) {
          if (s === start) {
            if (reported[start]) return;
            reported[start] = true;
            errors.push('Cannot spread fragment "' + start + '" within itself' + (trail.length ? ' via "' + trail.join('", "') + '"' : "") + ".");
          } else if (trail.indexOf(s) === -1 && fragments[s]) {
            walk(s, trail.concat([s]));
          }
        });
      })(start, []);
    });
    if (errors.length) return errors;

    function checkDirectives(dirs) {
      dirs.forEach(function (d) {
        if (!DIRECTIVES[d.name]) { errors.push('Unknown directive "@' + d.name + '".'); return; }
        var ifArg = null;
        d.arguments.forEach(function (a) {
          if (a.name !== "if") errors.push('Unknown argument "' + a.name + '" on directive "@' + d.name + '".');
          else ifArg = a;
        });
        if (!ifArg) errors.push('Directive "@' + d.name + '" argument "if" of type "Boolean!" is required, but it was not provided.');
        else { var le = literalError(schema, { kind: "NonNullType", type: { kind: "NamedType", name: "Boolean" } }, ifArg.value); if (le) errors.push(le); }
      });
    }

    function checkSelections(type, set) {
      set.selections.forEach(function (sel) {
        checkDirectives(sel.directives);
        if (sel.kind === "Field") {
          var def = sel.name === "__typename" ? TYPENAME : type.fields[sel.name];
          if (!def) { errors.push('Cannot query field "' + sel.name + '" on type "' + type.name + '".'); return; }
          sel.arguments.forEach(function (a) {
            var ad = def.args[a.name];
            if (!ad) { errors.push('Unknown argument "' + a.name + '" on field "' + type.name + "." + sel.name + '".'); return; }
            var le = literalError(schema, ad.type, a.value);
            if (le) errors.push(le);
          });
          Object.keys(def.args).forEach(function (an) {
            var ad = def.args[an];
            if (ad.type.kind === "NonNullType" && ad.defaultValue === undefined && !sel.arguments.some(function (a) { return a.name === an; }))
              errors.push('Field "' + sel.name + '" argument "' + an + '" of type "' + typeStr(ad.type) + '" is required, but it was not provided.');
          });
          var inner = schema.types[namedOf(def.type)];
          if (inner.kind === "OBJECT") {
            if (!sel.selectionSet) errors.push('Field "' + sel.name + '" of type "' + typeStr(def.type) + '" must have a selection of subfields. Did you mean "' + sel.name + ' { ... }"?');
            else checkSelections(inner, sel.selectionSet);
          } else if (sel.selectionSet) {
            errors.push('Field "' + sel.name + '" must not have a selection since type "' + typeStr(def.type) + '" has no subfields.');
          }
        } else if (sel.kind === "InlineFragment") {
          var it = type;
          if (sel.typeCondition) {
            it = schema.types[sel.typeCondition];
            if (!it) { errors.push('Unknown type "' + sel.typeCondition + '".'); return; }
            if (it.kind !== "OBJECT") { errors.push('Fragment cannot condition on non composite type "' + sel.typeCondition + '".'); return; }
            if (it.name !== type.name) { errors.push('Fragment cannot be spread here as objects of type "' + type.name + '" can never be of type "' + it.name + '".'); return; }
          }
          checkSelections(it, sel.selectionSet);
        } else {
          var f = fragments[sel.name];
          if (!f) { errors.push('Unknown fragment "' + sel.name + '".'); return; }
          var ft = schema.types[f.typeCondition];
          if (ft && ft.kind === "OBJECT" && ft.name !== type.name)
            errors.push('Fragment "' + sel.name + '" cannot be spread here as objects of type "' + type.name + '" can never be of type "' + ft.name + '".');
        }
      });
    }

    Object.keys(fragments).forEach(function (name) {
      var f = fragments[name], ft = schema.types[f.typeCondition];
      checkDirectives(f.directives);
      if (!ft) { errors.push('Unknown type "' + f.typeCondition + '".'); return; }
      if (ft.kind !== "OBJECT") { errors.push('Fragment "' + name + '" cannot condition on non composite type "' + f.typeCondition + '".'); return; }
      checkSelections(ft, f.selectionSet);
    });

    doc.definitions.forEach(function (op) {
      if (op.kind !== "OperationDefinition") return;
      var rootName = op.operation === "query" ? schema.queryType : op.operation === "mutation" ? schema.mutationType : null;
      if (!rootName) { errors.push("Schema is not configured to execute " + op.operation + " operation."); return; }
      checkDirectives(op.directives);
      var defined = {};
      op.variableDefinitions.forEach(function (v) {
        defined[v.name] = true;
        var vt = schema.types[namedOf(v.type)];
        if (!vt) errors.push('Unknown type "' + namedOf(v.type) + '".');
        else if (vt.kind === "OBJECT") errors.push('Variable "$' + v.name + '" cannot be non-input type "' + typeStr(v.type) + '".');
        else if (v.defaultValue) { var de = literalError(schema, v.type, v.defaultValue); if (de) errors.push(de); }
      });
      checkSelections(schema.types[rootName], op.selectionSet);
      variablesIn(op.selectionSet, fragments, {}).forEach(function (name) {
        if (!defined[name]) errors.push('Variable "$' + name + '" is not defined' + (op.name ? ' by operation "' + op.name + '"' : "") + ".");
      });
    });
    return errors;
  }

  function spreadsIn(set) {
    var out = [];
    (function walk(s) {
      s.selections.forEach(function (sel) {
        if (sel.kind === "FragmentSpread") out.push(sel.name);
        else if (sel.selectionSet) walk(sel.selectionSet);
      });
    })(set);
    return out;
  }

  function variablesIn(set, fragments, seenFragments) {
    var out = [];
    function fromValue(v) {
      if (v.kind === "Variable") { if (out.indexOf(v.name) === -1) out.push(v.name); }
      else if (v.kind === "List") v.values.forEach(fromValue);
      else if (v.kind === "Object") v.fields.forEach(function (f) { fromValue(f.value); });
    }
    (function walk(s) {
      s.selections.forEach(function (sel) {
        (sel.directives || []).forEach(function (d) { d.arguments.forEach(function (a) { fromValue(a.value); }); });
        if (sel.kind === "Field") sel.arguments.forEach(function (a) { fromValue(a.value); });
        if (sel.kind === "FragmentSpread") {
          if (seenFragments[sel.name] || !fragments[sel.name]) return;
          seenFragments[sel.name] = true;
          walk(fragments[sel.name].selectionSet);
          return;
        }
        if (sel.selectionSet) walk(sel.selectionSet);
      });
    })(set);
    return out;
  }

  /* ================= execution ================= */
  function isPromise(v) { return !!v && typeof v.then === "function"; }

  function GraphQLError(message, options) {
    var e = new Error(message);
    Object.setPrototypeOf(e, GraphQLError.prototype);
    e.name = "GraphQLError";
    if (options && options.extensions) e.extensions = options.extensions;
    return e;
  }
  GraphQLError.prototype = Object.create(Error.prototype, { constructor: { value: GraphQLError, writable: true, configurable: true } });

  function located(raw, path) {
    if (raw && raw.__located) return raw;
    var e = { __located: true, message: raw && raw.message !== undefined ? String(raw.message) : String(raw), path: path.slice() };
    if (raw && raw.extensions) e.extensions = raw.extensions;
    return e;
  }
  function formatError(e) {
    var out = { message: e.message };
    if (e.path && e.path.length) out.path = e.path;
    if (e.extensions) out.extensions = e.extensions;
    return out;
  }

  function shouldInclude(ctx, node) {
    var dirs = node.directives || [];
    for (var i = 0; i < dirs.length; i++) {
      var d = dirs[i], arg = d.arguments[0];
      var v = arg ? valueFromAST(ctx.schema, { kind: "NamedType", name: "Boolean" }, arg.value, ctx.vars) : undefined;
      if (d.name === "skip" && v === true) return false;
      if (d.name === "include" && v !== true) return false;
    }
    return true;
  }

  function collectFields(ctx, type, set, fields, visited) {
    set.selections.forEach(function (sel) {
      if (!shouldInclude(ctx, sel)) return;
      if (sel.kind === "Field") {
        var key = sel.alias || sel.name;
        (fields[key] = fields[key] || []).push(sel);
      } else if (sel.kind === "InlineFragment") {
        if (!sel.typeCondition || sel.typeCondition === type.name) collectFields(ctx, type, sel.selectionSet, fields, visited);
      } else {
        if (visited[sel.name]) return;
        visited[sel.name] = true;
        var f = ctx.fragments[sel.name];
        if (f && f.typeCondition === type.name) collectFields(ctx, type, f.selectionSet, fields, visited);
      }
    });
    return fields;
  }

  function coerceArgs(ctx, def, node, path) {
    var out = {};
    Object.keys(def.args).forEach(function (name) {
      var ad = def.args[name], given = null;
      node.arguments.forEach(function (a) { if (a.name === name) given = a; });
      var v = given ? valueFromAST(ctx.schema, ad.type, given.value, ctx.vars) : undefined;
      if (v === undefined && ad.defaultValue !== undefined) v = valueFromAST(ctx.schema, ad.type, ad.defaultValue, ctx.vars);
      if (v === undefined && ad.type.kind === "NonNullType")
        throw new Error('Argument "' + name + '" of required type "' + typeStr(ad.type) + '" was provided the variable "$' + (given ? given.value.name : "") + '" which was not provided a runtime value.');
      if (v !== undefined) out[name] = v;
    });
    return out;
  }

  function handleFieldError(ctx, raw, type, path) {
    var err = located(raw, path);
    if (type.kind === "NonNullType") throw err;
    ctx.errors.push(err);
    return null;
  }

  function executeField(ctx, parentType, source, nodes, path) {
    var node = nodes[0];
    if (node.name === "__typename") return parentType.name;
    var def = parentType.fields[node.name];
    var info = {
      fieldName: node.name, parentType: parentType.name, returnType: typeStr(def.type), path: path.slice(),
      fieldNodes: nodes, operation: ctx.operation, fragments: ctx.fragments, variableValues: ctx.vars
    };
    try {
      var args = coerceArgs(ctx, def, node, path);
      var fn = (ctx.resolvers[parentType.name] || {})[node.name];
      var result;
      if (typeof fn === "function") result = fn(source, args, ctx.context, info);
      else {
        var prop = source !== null && source !== undefined ? source[node.name] : undefined;
        result = typeof prop === "function" ? prop.call(source, args, ctx.context, info) : prop;
      }
      var completed = isPromise(result)
        ? result.then(function (r) { return completeValue(ctx, def.type, nodes, info, path, r); })
        : completeValue(ctx, def.type, nodes, info, path, result);
      if (isPromise(completed)) return completed.then(undefined, function (e) { return handleFieldError(ctx, e, def.type, path); });
      return completed;
    } catch (e) {
      return handleFieldError(ctx, e, def.type, path);
    }
  }

  function completeValue(ctx, type, nodes, info, path, result) {
    if (result instanceof Error) throw result;
    if (type.kind === "NonNullType") {
      var inner = completeValue(ctx, type.type, nodes, info, path, result);
      if (inner === null) throw located(new Error("Cannot return null for non-nullable field " + info.parentType + "." + info.fieldName + "."), path);
      return inner;
    }
    if (result === null || result === undefined) return null;
    if (type.kind === "ListType") {
      if (typeof result !== "object" || typeof result[Symbol.iterator] !== "function")
        throw new Error('Expected Iterable, but did not find one for field "' + info.parentType + "." + info.fieldName + '".');
      var hasPromise = false;
      var items = Array.from(result).map(function (item, i) {
        var itemPath = path.concat([i]);
        try {
          var c = isPromise(item)
            ? item.then(function (v) { return completeValue(ctx, type.type, nodes, info, itemPath, v); })
            : completeValue(ctx, type.type, nodes, info, itemPath, item);
          if (isPromise(c)) { hasPromise = true; return c.then(undefined, function (e) { return handleFieldError(ctx, e, type.type, itemPath); }); }
          return c;
        } catch (e) {
          return handleFieldError(ctx, e, type.type, itemPath);
        }
      });
      return hasPromise ? Promise.all(items) : items;
    }
    var t = ctx.schema.types[type.name];
    if (t.kind === "SCALAR" || t.kind === "ENUM") return serialize(t, result);
    var fields = {};
    nodes.forEach(function (n) { if (n.selectionSet) collectFields(ctx, t, n.selectionSet, fields, {}); });
    return executeFields(ctx, t, result, fields, path);
  }

  function executeFields(ctx, type, source, fields, path) {
    var keys = Object.keys(fields), values = [], hasPromise = false;
    keys.forEach(function (k) {
      var v = executeField(ctx, type, source, fields[k], path.concat([k]));
      if (isPromise(v)) hasPromise = true;
      values.push(v);
    });
    function assemble(vals) { var out = {}; keys.forEach(function (k, i) { out[k] = vals[i]; }); return out; }
    return hasPromise ? Promise.all(values).then(assemble) : assemble(values);
  }

  function executeFieldsSerially(ctx, type, source, fields) {
    var keys = Object.keys(fields), out = {};
    return keys.reduce(function (prev, k) {
      return prev.then(function () {
        return Promise.resolve(executeField(ctx, type, source, fields[k], [k])).then(function (v) { out[k] = v; });
      });
    }, Promise.resolve()).then(function () { return out; });
  }

  function graphql(opts) {
    return new Promise(function (resolve) {
      opts = opts || {};
      var schema = opts.schema || gqlSchema(opts.typeDefs);
      var doc;
      try { doc = typeof opts.query === "string" ? gqlParse(opts.query) : opts.query; }
      catch (e) { resolve({ errors: [{ message: e.message }] }); return; }
      var verrors = validateDocument(schema, doc);
      if (verrors.length) { resolve({ errors: verrors.map(function (m) { return { message: m }; }) }); return; }

      var ops = doc.definitions.filter(function (d) { return d.kind === "OperationDefinition"; });
      var op;
      if (opts.operationName) {
        op = ops.filter(function (o) { return o.name === opts.operationName; })[0];
        if (!op) { resolve({ errors: [{ message: 'Unknown operation named "' + opts.operationName + '".' }] }); return; }
      } else if (ops.length === 1) op = ops[0];
      else { resolve({ errors: [{ message: ops.length ? "Must provide operation name if query contains multiple operations." : "Must provide an operation." }] }); return; }

      var inputs = opts.variables || {}, vars = {}, varErrors = [];
      op.variableDefinitions.forEach(function (v) {
        var given = inputs[v.name];
        if (given === undefined) {
          if (v.defaultValue) vars[v.name] = valueFromAST(schema, v.type, v.defaultValue, {});
          else if (v.type.kind === "NonNullType") varErrors.push('Variable "$' + v.name + '" of required type "' + typeStr(v.type) + '" was not provided.');
          return;
        }
        if (given === null && v.type.kind === "NonNullType") { varErrors.push('Variable "$' + v.name + '" of non-null type "' + typeStr(v.type) + '" must not be null.'); return; }
        try { vars[v.name] = coerceInput(schema, v.type, given); }
        catch (e) { varErrors.push('Variable "$' + v.name + '" got invalid value ' + inspect(given) + "; " + e.message); }
      });
      if (varErrors.length) { resolve({ errors: varErrors.map(function (m) { return { message: m }; }) }); return; }

      var fragments = {};
      doc.definitions.forEach(function (d) { if (d.kind === "FragmentDefinition") fragments[d.name] = d; });
      var ctx = { schema: schema, resolvers: opts.resolvers || {}, context: opts.contextValue !== undefined ? opts.contextValue : opts.context, vars: vars, fragments: fragments, operation: op, errors: [] };
      var root = schema.types[op.operation === "mutation" ? schema.mutationType : schema.queryType];
      var fields = collectFields(ctx, root, op.selectionSet, {}, {});
      function finish(data) {
        resolve(ctx.errors.length ? { errors: ctx.errors.map(formatError), data: data } : { data: data });
      }
      function fail(e) { ctx.errors.push(located(e, [])); finish(null); }
      try {
        var data = op.operation === "mutation"
          ? executeFieldsSerially(ctx, root, opts.rootValue, fields)
          : executeFields(ctx, root, opts.rootValue, fields, []);
        if (isPromise(data)) data.then(finish, fail); else finish(data);
      } catch (e) { fail(e); }
    });
  }

  /* ================= JSON Schema ================= */
  function esc(seg) { return String(seg).replace(/~/g, "~0").replace(/\//g, "~1"); }
  function resolveRef(root, ref) {
    if (typeof ref !== "string" || ref.charAt(0) !== "#") throw new Error("Cannot resolve $ref " + ref + " (only #/… references are supported)");
    var node = root;
    ref.slice(1).split("/").slice(1).forEach(function (seg) {
      seg = seg.replace(/~1/g, "/").replace(/~0/g, "~");
      node = node !== null && typeof node === "object" && Object.prototype.hasOwnProperty.call(node, seg) ? node[seg] : undefined;
    });
    if (node === undefined) throw new Error("Cannot resolve $ref " + ref);
    return node;
  }
  function typeOk(name, v) {
    switch (name) {
      case "string": return typeof v === "string";
      case "number": return typeof v === "number" && isFinite(v);
      case "integer": return typeof v === "number" && Number.isInteger(v);
      case "boolean": return typeof v === "boolean";
      case "null": return v === null;
      case "array": return Array.isArray(v);
      case "object": return v !== null && typeof v === "object" && !Array.isArray(v);
    }
    return true;
  }
  function checkSchema(schema, value, root) {
    root = root || schema;
    var out = [];
    (function check(s, v, ptr) {
      if (s === true || s === undefined || s === null) return;
      if (s === false) { out.push({ pointer: ptr, message: "is not allowed" }); return; }
      if (s.$ref !== undefined) check(resolveRef(root, s.$ref), v, ptr);
      if (s.type !== undefined) {
        var types = Array.isArray(s.type) ? s.type : [s.type];
        if (!types.some(function (t) { return typeOk(t, v); })) { out.push({ pointer: ptr, message: "must be " + types.join(" or ") }); return; }
      }
      if (s.enum && !s.enum.some(function (e) { return JSON.stringify(e) === JSON.stringify(v); }))
        out.push({ pointer: ptr, message: "must be one of: " + s.enum.map(String).join(", ") });
      if (s.const !== undefined && JSON.stringify(s.const) !== JSON.stringify(v))
        out.push({ pointer: ptr, message: "must be " + (typeof s.const === "string" ? s.const : JSON.stringify(s.const)) });
      if (typeof v === "string") {
        if (s.minLength !== undefined && v.length < s.minLength) out.push({ pointer: ptr, message: "must be at least " + s.minLength + " characters" });
        if (s.maxLength !== undefined && v.length > s.maxLength) out.push({ pointer: ptr, message: "must be at most " + s.maxLength + " characters" });
        if (s.pattern !== undefined && !new RegExp(s.pattern).test(v)) out.push({ pointer: ptr, message: "must match pattern " + s.pattern });
      }
      if (typeof v === "number") {
        if (s.minimum !== undefined && v < s.minimum) out.push({ pointer: ptr, message: "must be >= " + s.minimum });
        if (s.maximum !== undefined && v > s.maximum) out.push({ pointer: ptr, message: "must be <= " + s.maximum });
        if (s.exclusiveMinimum !== undefined && v <= s.exclusiveMinimum) out.push({ pointer: ptr, message: "must be > " + s.exclusiveMinimum });
        if (s.exclusiveMaximum !== undefined && v >= s.exclusiveMaximum) out.push({ pointer: ptr, message: "must be < " + s.exclusiveMaximum });
      }
      if (typeOk("object", v)) {
        (s.required || []).forEach(function (k) {
          if (!Object.prototype.hasOwnProperty.call(v, k)) out.push({ pointer: ptr + "/" + esc(k), message: "is required" });
        });
        var props = s.properties || {};
        Object.keys(props).forEach(function (k) {
          if (Object.prototype.hasOwnProperty.call(v, k)) check(props[k], v[k], ptr + "/" + esc(k));
        });
        if (s.additionalProperties !== undefined && s.additionalProperties !== true) {
          Object.keys(v).forEach(function (k) {
            if (Object.prototype.hasOwnProperty.call(props, k)) return;
            if (s.additionalProperties === false) out.push({ pointer: ptr + "/" + esc(k), message: "is not allowed" });
            else check(s.additionalProperties, v[k], ptr + "/" + esc(k));
          });
        }
      }
      if (Array.isArray(v)) {
        if (s.minItems !== undefined && v.length < s.minItems) out.push({ pointer: ptr, message: "must have at least " + s.minItems + " items" });
        if (s.maxItems !== undefined && v.length > s.maxItems) out.push({ pointer: ptr, message: "must have at most " + s.maxItems + " items" });
        if (s.items !== undefined) v.forEach(function (item, i) { check(s.items, item, ptr + "/" + i); });
      }
    })(schema, value, "");
    return out;
  }

  /* ================= OpenAPI paths ================= */
  var METHODS = ["get", "put", "post", "delete", "options", "head", "patch", "trace"];
  function oasFind(spec, method, path) {
    var segs = String(path).split("/"), best = null;
    Object.keys((spec && spec.paths) || {}).forEach(function (template) {
      var tsegs = template.split("/");
      if (tsegs.length !== segs.length) return;
      var params = {}, literal = 0;
      for (var i = 0; i < tsegs.length; i++) {
        var m = /^\{([^}]+)\}$/.exec(tsegs[i]);
        if (m) {
          if (segs[i] === "") return;
          try { params[m[1]] = decodeURIComponent(segs[i]); } catch (e) { return; }
        } else if (tsegs[i] === segs[i]) literal++;
        else return;
      }
      if (!best || literal > best.literal) best = { template: template, params: params, literal: literal };
    });
    if (!best) return null;
    var item = spec.paths[best.template] || {};
    var allowed = Object.keys(item).filter(function (k) { return METHODS.indexOf(k) !== -1; }).map(function (k) { return k.toUpperCase(); });
    var op = item[String(method).toLowerCase()];
    return { template: best.template, operation: op || null, params: best.params, allowed: allowed };
  }

  g.gqlParse = gqlParse;
  g.gqlSchema = gqlSchema;
  g.graphql = graphql;
  g.GraphQLError = GraphQLError;
  g.checkSchema = checkSchema;
  g.oasFind = oasFind;
};
