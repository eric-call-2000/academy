/* ============================================================
   CodeLab — lightweight mobile-first code editor
   ------------------------------------------------------------
   A <textarea> (reliable on every phone keyboard) with a
   syntax-highlighted <pre> overlay behind it, file tabs, and a
   helper key bar (tab, brackets, quotes…) for mobile typing.

   window.CODELAB.createEditor(root, {
     files: [{name, content}], readonly?, onChange(name, content)
   }) → { getFiles, setFiles, setFile, getActive, setActive, refresh }

   Also exports window.CODELAB.hl(code, lang) for cheatsheets.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- syntax highlighting ---------------- */
  var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); };

  var JS_KEYWORDS = {};
  ("break case catch class const continue debugger default delete do else export extends finally for function if " +
   "import in instanceof let new of return static super switch this throw try typeof var void while with yield async await get set")
    .split(" ").forEach(function (k) { JS_KEYWORDS[k] = 1; });
  var JS_LITERALS = { "true": 1, "false": 1, "null": 1, "undefined": 1, "NaN": 1, "Infinity": 1 };

  function hlJS(src) {
    var re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\[\s\S]|[^\\`])*`?|"(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?)|(\b\d[\d_]*(?:\.\d+)?(?:e[+-]?\d+)?\b)|([A-Za-z_$][\w$]*)/g;
    var out = "", last = 0, m;
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index));
      var t = m[0];
      if (m[1]) out += '<span class="tk-c">' + esc(t) + "</span>";
      else if (m[2]) out += '<span class="tk-s">' + esc(t) + "</span>";
      else if (m[3]) out += '<span class="tk-n">' + esc(t) + "</span>";
      else if (JS_KEYWORDS[t]) out += '<span class="tk-k">' + esc(t) + "</span>";
      else if (JS_LITERALS[t]) out += '<span class="tk-n">' + esc(t) + "</span>";
      else out += esc(t);
      last = m.index + t.length;
    }
    return out + esc(src.slice(last));
  }

  function hlCSS(src) {
    var re = /(\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*')|(@[a-zA-Z-]+)|(#[0-9a-fA-F]{3,8}\b)|(-?\b\d[\d.]*(?:px|rem|em|%|vh|vw|vmin|vmax|s|ms|fr|deg|ch)?\b)|([a-zA-Z-]+)(?=\s*:)/g;
    var out = "", last = 0, m;
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index));
      var t = m[0];
      if (m[1]) out += '<span class="tk-c">' + esc(t) + "</span>";
      else if (m[2]) out += '<span class="tk-s">' + esc(t) + "</span>";
      else if (m[3]) out += '<span class="tk-k">' + esc(t) + "</span>";
      else if (m[4]) out += '<span class="tk-n">' + esc(t) + "</span>";
      else if (m[5]) out += '<span class="tk-n">' + esc(t) + "</span>";
      else if (m[6]) out += '<span class="tk-a">' + esc(t) + "</span>";
      else out += esc(t);
      last = m.index + t.length;
    }
    return out + esc(src.slice(last));
  }

  function hlHTML(src) {
    var re = /(<!--[\s\S]*?-->)|(<\/?)([a-zA-Z][\w-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)(\/?>)/g;
    var out = "", last = 0, m;
    function attrs(s) {
      return s.replace(/([a-zA-Z-:]+)(\s*=\s*)("[^"]*"|'[^']*')?/g, function (_, name, eq, val) {
        return '<span class="tk-a">' + esc(name) + "</span>" + esc(eq || "") +
          (val ? '<span class="tk-s">' + esc(val) + "</span>" : "");
      });
    }
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index));
      if (m[1]) out += '<span class="tk-c">' + esc(m[1]) + "</span>";
      else out += '<span class="tk-p">' + esc(m[2]) + '</span><span class="tk-k">' + esc(m[3]) + "</span>" +
        attrs(m[4]) + '<span class="tk-p">' + esc(m[5]) + "</span>";
      last = m.index + m[0].length;
    }
    return out + esc(src.slice(last));
  }

  function hl(code, lang) {
    if (lang === "js") return hlJS(code);
    if (lang === "css") return hlCSS(code);
    if (lang === "html") return hlHTML(code);
    return esc(code);
  }
  function langOf(name) {
    if (/\.html?$/i.test(name)) return "html";
    if (/\.css$/i.test(name)) return "css";
    if (/\.js$/i.test(name)) return "js";
    return "text";
  }

  /* ---------------- the editor ---------------- */
  var HELPER_KEYS = [
    { label: "⇥", ins: "  " },
    { label: "{ }", ins: "{}", back: 1 },
    { label: "( )", ins: "()", back: 1 },
    { label: "[ ]", ins: "[]", back: 1 },
    { label: "< >", ins: "<>", back: 1 },
    { label: '" "', ins: '""', back: 1 },
    { label: "' '", ins: "''", back: 1 },
    { label: "=", ins: "=" },
    { label: ";", ins: ";" },
    { label: ":", ins: ":" },
    { label: "/", ins: "/" },
    { label: "!", ins: "!" },
    { label: "$", ins: "$" },
    { label: "`", ins: "`" }
  ];

  function createEditor(root, opts) {
    var files = {}, order = [];
    (opts.files || []).forEach(function (f) { files[f.name] = f.content; order.push(f.name); });
    var active = order[0] || null;

    root.classList.add("ed");
    root.innerHTML = "";

    var tabs = document.createElement("div");
    tabs.className = "ed-tabs";
    root.appendChild(tabs);

    var body = document.createElement("div");
    body.className = "ed-body";
    var pre = document.createElement("pre");
    pre.className = "ed-hl";
    pre.setAttribute("aria-hidden", "true");
    var code = document.createElement("code");
    pre.appendChild(code);
    var ta = document.createElement("textarea");
    ta.className = "ed-ta";
    ta.setAttribute("wrap", "off");
    ta.setAttribute("spellcheck", "false");
    ta.setAttribute("autocapitalize", "off");
    ta.setAttribute("autocomplete", "off");
    ta.setAttribute("autocorrect", "off");
    ta.setAttribute("aria-label", "Code editor");
    body.appendChild(pre);
    body.appendChild(ta);
    root.appendChild(body);

    var keys = document.createElement("div");
    keys.className = "ed-keys";
    HELPER_KEYS.forEach(function (k) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "ed-key";
      b.textContent = k.label;
      // mousedown so the textarea never loses focus / keyboard never closes
      b.addEventListener("mousedown", function (e) { e.preventDefault(); insert(k.ins, k.back || 0); });
      b.addEventListener("touchstart", function (e) { e.preventDefault(); insert(k.ins, k.back || 0); }, { passive: false });
      keys.appendChild(b);
    });
    root.appendChild(keys);

    function paint() {
      code.innerHTML = hl(files[active] != null ? files[active] : "", langOf(active || "")) + "\n";
    }
    function paintTabs() {
      tabs.innerHTML = "";
      order.forEach(function (name) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "ed-tab" + (name === active ? " on" : "");
        b.textContent = name;
        b.onclick = function () { setActive(name); };
        tabs.appendChild(b);
      });
    }
    function syncScroll() {
      pre.scrollTop = ta.scrollTop;
      pre.scrollLeft = ta.scrollLeft;
    }
    function readTA() {
      files[active] = ta.value;
      paint();
      syncScroll();
      if (opts.onChange) opts.onChange(active, ta.value);
    }

    function insert(text, back) {
      if (opts.readonly) return;
      ta.focus();
      var ok = false;
      try { ok = document.execCommand("insertText", false, text); } catch (e) { ok = false; }
      if (!ok) {
        var s = ta.selectionStart, e2 = ta.selectionEnd;
        ta.value = ta.value.slice(0, s) + text + ta.value.slice(e2);
        ta.selectionStart = ta.selectionEnd = s + text.length;
      }
      if (back) {
        var p = ta.selectionStart - back;
        ta.setSelectionRange(p, p);
      }
      readTA();
    }

    ta.addEventListener("input", readTA);
    ta.addEventListener("scroll", syncScroll);
    ta.addEventListener("keydown", function (e) {
      if (opts.readonly) return;
      if (e.key === "Tab") {
        e.preventDefault();
        insert("  ", 0);
      } else if (e.key === "Enter") {
        // keep the current line's indentation (plus one level after "{" or ">")
        var s = ta.selectionStart;
        var before = ta.value.slice(0, s);
        var line = before.slice(before.lastIndexOf("\n") + 1);
        var indent = (line.match(/^[ \t]*/) || [""])[0];
        var extra = /[{(>]\s*$/.test(line) ? "  " : "";
        e.preventDefault();
        insert("\n" + indent + extra, 0);
      }
    });
    if (opts.readonly) ta.setAttribute("readonly", "readonly");

    function setActive(name) {
      if (files[name] == null) return;
      active = name;
      paintTabs();
      ta.value = files[name];
      ta.scrollTop = 0; ta.scrollLeft = 0;
      paint();
      syncScroll();
    }

    paintTabs();
    if (active != null) ta.value = files[active];
    paint();

    return {
      getFiles: function () { var out = {}; order.forEach(function (n) { out[n] = files[n]; }); return out; },
      setFiles: function (next) {
        order.forEach(function (n) { if (next[n] != null) files[n] = next[n]; });
        ta.value = files[active] != null ? files[active] : "";
        paint(); syncScroll();
      },
      setFile: function (name, content) {
        if (files[name] == null) return;
        files[name] = content;
        if (name === active) { ta.value = content; paint(); syncScroll(); }
      },
      getActive: function () { return active; },
      setActive: setActive,
      focus: function () { ta.focus(); },
      textarea: ta,
      refresh: paint
    };
  }

  window.CODELAB = window.CODELAB || {};
  window.CODELAB.createEditor = createEditor;
  window.CODELAB.hl = hl;
  window.CODELAB.langOf = langOf;
})();
