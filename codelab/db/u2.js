/* Database Mastery — Unit 2: Database Design & Normalization */
window.CODELAB.addUnit("db", {
  id: "db-u2",
  title: "Database Design & Normalization",
  icon: "📐",
  blurb: "Designing relational databases: normalization, keys, indexes, and avoiding common design pitfalls.",
  cheat: [
    { h: "Normalization rules", lang: "sql", code: "-- 1NF: Eliminate repeating groups\n-- 2NF: Eliminate partial dependencies\n-- 3NF: Eliminate transitive dependencies\n-- BCNF: Boyce-Codd normal form\n\n-- Example: Separate users and orders\nusers (id, name, email)\norders (id, user_id, product, price)", note: "Normalization reduces redundancy and prevents anomalies. Don't over-normalize — performance matters too." },
    { h: "Primary keys", lang: "sql", code: "-- Auto-increment primary key\nCREATE TABLE users (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(100),\n  email VARCHAR(100) UNIQUE\n);\n\n-- Composite primary key\nCREATE TABLE order_items (\n  order_id INT,\n  product_id INT,\n  quantity INT,\n  PRIMARY KEY (order_id, product_id)\n);", note: "Primary keys uniquely identify rows. Use auto-increment for single-column keys, composite keys for many-to-many junctions." },
    { h: "Foreign keys", lang: "sql", code: "-- Foreign key constraint\nCREATE TABLE orders (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  user_id INT,\n  product VARCHAR(100),\n  FOREIGN KEY (user_id) REFERENCES users(id)\n    ON DELETE CASCADE\n    ON UPDATE CASCADE\n);", note: "Foreign keys enforce referential integrity. CASCADE actions automatically update/delete related rows." },
    { h: "Indexes", lang: "sql", code: "-- Create index on frequently queried columns\nCREATE INDEX idx_users_email ON users(email);\n\n-- Composite index\nCREATE INDEX idx_orders_user_date ON orders(user_id, created_at);\n\n-- Unique index\nCREATE UNIQUE INDEX idx_users_email ON users(email);", note: "Indexes speed up queries but slow down writes. Index columns used in WHERE, JOIN, and ORDER BY." }
  ],
  lessons: [

    {
      id: "db-u2-1",
      title: "First Normal Form (1NF): eliminate repeating groups",
      kind: "js", chip: "DB", xp: 15, mins: 12,
      brief: **First Normal Form (1NF)** requires that tables have no repeating groups and each column contains atomic (indivisible) values.\n\n**Rules**:\n- Each cell contains a single value\n- Each record is unique (primary key)\n- Columns are named consistently\n\nYou'll normalize a denormalized table to 1NF.",
      example: { lang: "js", code: "// Denormalized (violates 1NF)\nconst bad = [\n  { user: 'Alice', phones: ['555-1234', '555-5678'] },\n  { user: 'Bob', phones: ['555-9999'] }\n];\n\n// Normalized to 1NF\nconst good = [\n  { user: 'Alice', phone: '555-1234' },\n  { user: 'Alice', phone: '555-5678' },\n  { user: 'Bob', phone: '555-9999' }\n];" },
      steps: [
        { text: "Create a denormalized table with repeating groups.",
          test: "T.expect(Array.isArray(denormalized), 'Create denormalized array');\nT.expect(Array.isArray(denormalized[0].phones), 'Should have repeating groups');" },
        { text: "Implement normalize1NF() to eliminate repeating groups.",
          test: "T.expect(typeof normalize1NF === 'function', 'Create normalize1NF function');\nconst normalized = normalize1NF(denormalized);\nT.expect(!Array.isArray(normalized[0].phones), 'Should eliminate repeating groups');" },
        { text: "Each phone should be a separate row with the user repeated.",
          test: "const result = normalize1NF(denormalized);\nT.expect(result.length > denormalized.length, 'Should have more rows after normalization');" },
        { text: "Add a primary key (id) to each row.",
          test: "const result2 = normalize1NF(denormalized);\nresult2.forEach(row => T.expect(row.id, 'Each row should have an id'));" }
      ],
      files: [
        { name: "script.js", content: "// Database normalization to 1NF\n\nconst denormalized = [\n  { user: 'Alice', email: 'alice@example.com', phones: ['555-1234', '555-5678'] },\n  { user: 'Bob', email: 'bob@example.com', phones: ['555-9999'] },\n  { user: 'Charlie', email: 'charlie@example.com', phones: ['555-1111', '555-2222', '555-3333'] }\n];\n\nfunction normalize1NF(data) {\n  // Convert denormalized data to 1NF\n  // Split repeating groups into separate rows\n}\n\nconsole.log('=== Denormalized Data ===');\nconsole.log(denormalized);\n\nconsole.log('\\n=== Normalized to 1NF ===');\nconst normalized = normalize1NF(denormalized);\nconsole.log(normalized);\n\nconsole.log('\\n=== Statistics ===');\nconsole.log(`Original rows: ${denormalized.length}`);\nconsole.log(`Normalized rows: ${normalized.length}`);\n" }
      ],
      hints: [
        "For each row in the denormalized data, create a new row for each item in the repeating group",
        "Copy the non-repeating fields to each new row",
        "Add an incrementing id as the primary key",
        "The result should have more rows but no repeating groups"
      ],
      solution: {
        "script.js": "// Database normalization to 1NF\n\nconst denormalized = [\n  { user: 'Alice', email: 'alice@example.com', phones: ['555-1234', '555-5678'] },\n  { user: 'Bob', email: 'bob@example.com', phones: ['555-9999'] },\n  { user: 'Charlie', email: 'charlie@example.com', phones: ['555-1111', '555-2222', '555-3333'] }\n];\n\nfunction normalize1NF(data) {\n  const normalized = [];\n  let id = 1;\n  \n  data.forEach(row => {\n    const phones = row.phones || [];\n    \n    if (phones.length === 0) {\n      // If no repeating group, still create one row\n      normalized.push({\n        id: id++,\n        user: row.user,\n        email: row.email,\n        phone: null\n      });\n    } else {\n      // Create a row for each phone\n      phones.forEach(phone => {\n        normalized.push({\n          id: id++,\n          user: row.user,\n          email: row.email,\n          phone: phone\n        });\n      });\n    }\n  });\n  \n  return normalized;\n}\n\nconsole.log('=== Denormalized Data ===');\nconsole.log(denormalized);\n\nconsole.log('\\n=== Normalized to 1NF ===');\nconst normalized = normalize1NF(denormalized);\nconsole.log(normalized);\n\nconsole.log('\\n=== Statistics ===');\nconsole.log(`Original rows: ${denormalized.length}`);\nconsole.log(`Normalized rows: ${normalized.length}`);\n"
      }
    },

    {
      id: "db-u2-2",
      title: "Second Normal Form (2NF): eliminate partial dependencies",
      kind: "js", chip: "DB", xp: 15, mins: 12,
      brief: **Second Normal Form (2NF)** applies to tables with composite primary keys. It requires that non-key columns depend on the ENTIRE primary key, not just part of it.\n\n**Rule**: Remove partial dependencies by creating separate tables.\n\nYou'll identify and fix partial dependencies in a table with a composite key.",
      example: { lang: "js", code: "// Violates 2NF: product_name depends only on product_id\nconst bad = [\n  { order_id: 1, product_id: 101, product_name: 'Laptop', quantity: 2 },\n  { order_id: 1, product_id: 102, product_name: 'Mouse', quantity: 5 }\n];\n\n// 2NF compliant: separate products\nconst products = [\n  { product_id: 101, product_name: 'Laptop' },\n  { product_id: 102, product_name: 'Mouse' }\n];\n\nconst order_items = [\n  { order_id: 1, product_id: 101, quantity: 2 },\n  { order_id: 1, product_id: 102, quantity: 5 }\n];" },
      steps: [
        { text: "Create a table with composite key and partial dependency.",
          test: "T.expect(typeof bad2NF === 'object', 'Create table with composite key');\nT.expect(bad2NF[0].order_id && bad2NF[0].product_id, 'Should have composite key');" },
        { text: "Identify partial dependencies (columns depending on only part of key).",
          test: "T.expect(typeof identifyPartialDependencies === 'function', 'Create function to identify partial dependencies');\nconst partials = identifyPartialDependencies(bad2NF);\nT.expect(partials.length > 0, 'Should identify partial dependencies');" },
        { text: "Implement normalize2NF() to separate partial dependencies.",
          test: "T.expect(typeof normalize2NF === 'function', 'Create normalize2NF function');\nconst { products, orderItems } = normalize2NF(bad2NF);\nT.expect(products && orderItems, 'Should return separated tables');" },
        { text: "Verify product_name no longer exists in order_items table.",
          test: "const { products: p, orderItems: oi } = normalize2NF(bad2NF);\nT.expect(!oi[0].product_name, 'product_name should not be in order_items');" }
      ],
      files: [
        { name: "script.js", content: "// Database normalization to 2NF\n\nconst bad2NF = [\n  { order_id: 1, product_id: 101, product_name: 'Laptop', quantity: 2, price: 999 },\n  { order_id: 1, product_id: 102, product_name: 'Mouse', quantity: 5, price: 29 },\n  { order_id: 2, product_id: 101, product_name: 'Laptop', quantity: 1, price: 999 },\n  { order_id: 3, product_id: 103, product_name: 'Keyboard', quantity: 3, price: 79 }\n];\n\nfunction identifyPartialDependencies(data) {\n  // Identify columns that depend on only part of the composite key\n  // Composite key: (order_id, product_id)\n  // Partial dependency: product_name, price depend only on product_id\n}\n\nfunction normalize2NF(data) {\n  // Separate into products table and order_items table\n  // Return: { products, orderItems }\n}\n\nconsole.log('=== Original Table (Violates 2NF) ===');\nconsole.log(bad2NF);\n\nconsole.log('\\n=== Partial Dependencies ===');\nconst partials = identifyPartialDependencies(bad2NF);\nconsole.log('Columns with partial dependencies:', partials);\n\nconsole.log('\\n=== Normalized to 2NF ===');\nconst { products, orderItems } = normalize2NF(bad2NF);\n\nconsole.log('\\nProducts table:');\nconsole.log(products);\n\nconsole.log('\\nOrder items table:');\nconsole.log(orderItems);\n" }
      ],
      hints: [
        "For identifyPartialDependencies: check if a column's value is always the same for a given product_id regardless of order_id",
        "For normalize2NF: extract unique products into a separate table with product_id as key",
        "The order_items table should only have order_id, product_id, and quantity (fields that depend on the full composite key)",
        "product_name and price should only exist in the products table"
      ],
      solution: {
        "script.js": "// Database normalization to 2NF\n\nconst bad2NF = [\n  { order_id: 1, product_id: 101, product_name: 'Laptop', quantity: 2, price: 999 },\n  { order_id: 1, product_id: 102, product_name: 'Mouse', quantity: 5, price: 29 },\n  { order_id: 2, product_id: 101, product_name: 'Laptop', quantity: 1, price: 999 },\n  { order_id: 3, product_id: 103, product_name: 'Keyboard', quantity: 3, price: 79 }\n];\n\nfunction identifyPartialDependencies(data) {\n  const partials = [];\n  const compositeKey = ['order_id', 'product_id'];\n  \n  // Check each non-key column\n  Object.keys(data[0]).forEach(column => {\n    if (compositeKey.includes(column)) return;\n    \n    // Check if this column depends only on product_id\n    const productValues = {};\n    data.forEach(row => {\n      if (!productValues[row.product_id]) {\n        productValues[row.product_id] = new Set();\n      }\n      productValues[row.product_id].add(row[column]);\n    });\n    \n    // If each product_id has only one value for this column, it's a partial dependency\n    const isPartial = Object.values(productValues).every(values => values.size === 1);\n    if (isPartial) {\n      partials.push(column);\n    }\n  });\n  \n  return partials;\n}\n\nfunction normalize2NF(data) {\n  // Extract unique products\n  const productsMap = new Map();\n  data.forEach(row => {\n    if (!productsMap.has(row.product_id)) {\n      productsMap.set(row.product_id, {\n        product_id: row.product_id,\n        product_name: row.product_name,\n        price: row.price\n      });\n    }\n  });\n  \n  const products = Array.from(productsMap.values());\n  \n  // Create order_items without partial dependencies\n  const orderItems = data.map(row => ({\n    order_id: row.order_id,\n    product_id: row.product_id,\n    quantity: row.quantity\n  }));\n  \n  return { products, orderItems };\n}\n\nconsole.log('=== Original Table (Violates 2NF) ===');\nconsole.log(bad2NF);\n\nconsole.log('\\n=== Partial Dependencies ===');\nconst partials = identifyPartialDependencies(bad2NF);\nconsole.log('Columns with partial dependencies:', partials);\n\nconsole.log('\\n=== Normalized to 2NF ===');\nconst { products, orderItems } = normalize2NF(bad2NF);\n\nconsole.log('\\nProducts table:');\nconsole.log(products);\n\nconsole.log('\\nOrder items table:');\nconsole.log(orderItems);\n"
      }
    },

    {
      id: "db-u2-3",
      title: "Third Normal Form (3NF): eliminate transitive dependencies",
      kind: "js", chip: "DB", xp: 15, mins: 12,
      brief: **Third Normal Form (3NF)** requires that non-key columns depend ONLY on the primary key, not on other non-key columns.\n\n**Rule**: Remove transitive dependencies (A → B → C) by creating separate tables.\n\nYou'll identify and fix transitive dependencies.",
      example: { lang: "js", code: "// Violates 3NF: city depends on zip_code, zip_code depends on id\nconst bad = [\n  { id: 1, name: 'Alice', zip_code: '10001', city: 'NYC' },\n  { id: 2, name: 'Bob', zip_code: '10001', city: 'NYC' }\n];\n\n// 3NF compliant: separate zip_codes\nconst users = [\n  { id: 1, name: 'Alice', zip_code: '10001' },\n  { id: 2, name: 'Bob', zip_code: '10001' }\n];\n\nconst zip_codes = [\n  { zip_code: '10001', city: 'NYC' }\n];" },
      steps: [
        { text: "Create a table with transitive dependency.",
          test: "T.expect(typeof bad3NF === 'object', 'Create table with transitive dependency');\nT.expect(bad3NF[0].zip_code && bad3NF[0].city, 'Should have transitive dependency');" },
        { text: "Identify transitive dependencies (A → B → C pattern).",
          test: "T.expect(typeof identifyTransitiveDependencies === 'function', 'Create function to identify transitive dependencies');\nconst transitive = identifyTransitiveDependencies(bad3NF);\nT.expect(transitive.length > 0, 'Should identify transitive dependencies');" },
        { text: "Implement normalize3NF() to separate transitive dependencies.",
          test: "T.expect(typeof normalize3NF === 'function', 'Create normalize3NF function');\nconst result = normalize3NF(bad3NF);\nT.expect(result.mainTable && result.lookupTable, 'Should return separated tables');" },
        { text: "Verify transitive column removed from main table.",
          test: "const { mainTable } = normalize3NF(bad3NF);\nT.expect(!mainTable[0].city, 'city should be removed from main table');" }
      ],
      files: [
        { name: "script.js", content: "// Database normalization to 3NF\n\nconst bad3NF = [\n  { id: 1, name: 'Alice', zip_code: '10001', city: 'NYC', state: 'NY' },\n  { id: 2, name: 'Bob', zip_code: '10001', city: 'NYC', state: 'NY' },\n  { id: 3, name: 'Charlie', zip_code: '90210', city: 'Beverly Hills', state: 'CA' },\n  { id: 4, name: 'Diana', zip_code: '60601', city: 'Chicago', state: 'IL' }\n];\n\nfunction identifyTransitiveDependencies(data) {\n  // Identify transitive dependencies\n  // Pattern: id → zip_code → city (city depends on zip_code, not directly on id)\n}\n\nfunction normalize3NF(data) {\n  // Separate into main table and lookup table\n  // Return: { mainTable, lookupTable }\n}\n\nconsole.log('=== Original Table (Violates 3NF) ===');\nconsole.log(bad3NF);\n\nconsole.log('\\n=== Transitive Dependencies ===');\nconst transitive = identifyTransitiveDependencies(bad3NF);\nconsole.log('Transitive dependencies:', transitive);\n\nconsole.log('\\n=== Normalized to 3NF ===');\nconst { mainTable, lookupTable } = normalize3NF(bad3NF);\n\nconsole.log('\\nMain table (users):');\nconsole.log(mainTable);\n\nconsole.log('\\nLookup table (zip_codes):');\nconsole.log(lookupTable);\n" }
      ],
      hints: [
        "For identifyTransitiveDependencies: check if a column's values are determined by another non-key column",
        "For normalize3NF: extract unique combinations of the determining column and dependent column into a lookup table",
        "The main table should keep the determining column but remove the dependent column",
        "The lookup table should have the determining column as key and the dependent column(s)"
      ],
      solution: {
        "script.js": "// Database normalization to 3NF\n\nconst bad3NF = [\n  { id: 1, name: 'Alice', zip_code: '10001', city: 'NYC', state: 'NY' },\n  { id: 2, name: 'Bob', zip_code: '10001', city: 'NYC', state: 'NY' },\n  { id: 3, name: 'Charlie', zip_code: '90210', city: 'Beverly Hills', state: 'CA' },\n  { id: 4, name: 'Diana', zip_code: '60601', city: 'Chicago', state: 'IL' }\n];\n\nfunction identifyTransitiveDependencies(data) {\n  const transitive = [];\n  const keyColumn = 'id';\n  \n  // Check for columns that are determined by other non-key columns\n  Object.keys(data[0]).forEach(column => {\n    if (column === keyColumn) return;\n    \n    // Check if this column's values are always the same for a given zip_code\n    const zipValues = {};\n    data.forEach(row => {\n      if (column === 'zip_code') return;\n      if (!zipValues[row.zip_code]) {\n        zipValues[row.zip_code] = new Set();\n      }\n      zipValues[row.zip_code].add(row[column]);\n    });\n    \n    // If each zip_code has only one value for this column, it's transitively dependent\n    const isTransitive = Object.values(zipValues).every(values => values.size === 1);\n    if (isTransitive) {\n      transitive.push({ column, dependsOn: 'zip_code' });\n    }\n  });\n  \n  return transitive;\n}\n\nfunction normalize3NF(data) {\n  // Extract unique zip codes with their cities\n  const zipMap = new Map();\n  data.forEach(row => {\n    if (!zipMap.has(row.zip_code)) {\n      zipMap.set(row.zip_code, {\n        zip_code: row.zip_code,\n        city: row.city,\n        state: row.state\n      });\n    }\n  });\n  \n  const lookupTable = Array.from(zipMap.values());\n  \n  // Create main table without city and state\n  const mainTable = data.map(row => ({\n    id: row.id,\n    name: row.name,\n    zip_code: row.zip_code\n  }));\n  \n  return { mainTable, lookupTable };\n}\n\nconsole.log('=== Original Table (Violates 3NF) ===');\nconsole.log(bad3NF);\n\nconsole.log('\\n=== Transitive Dependencies ===');\nconst transitive = identifyTransitiveDependencies(bad3NF);\nconsole.log('Transitive dependencies:', transitive);\n\nconsole.log('\\n=== Normalized to 3NF ===');\nconst { mainTable, lookupTable } = normalize3NF(bad3NF);\n\nconsole.log('\\nMain table (users):');\nconsole.log(mainTable);\n\nconsole.log('\\nLookup table (zip_codes):');\nconsole.log(lookupTable);\n"
      }
    },

    {
      id: "db-u2-4",
      title: "Primary keys and foreign keys",
      kind: "js", chip: "DB", xp: 15, mins: 12,
      brief: **Primary keys** uniquely identify rows. **Foreign keys** link tables and enforce referential integrity.\n\n**Primary key types**:\n- Auto-increment integer\n- UUID\n- Composite key (multiple columns)\n\n**Foreign key rules**:\n- CASCADE: automatically delete/update related rows\n- RESTRICT: prevent deletion if related rows exist\n- SET NULL: set foreign key to NULL",
      example: { lang: "sql", code: "-- Primary key with auto-increment\nCREATE TABLE users (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(100)\n);\n\n-- Foreign key with CASCADE\nCREATE TABLE orders (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n    ON DELETE CASCADE\n);" },
      steps: [
        { text: "Create tables with primary keys.",
          test: "T.expect(typeof createTable === 'function', 'Create createTable function');\nconst users = createTable('users', { id: 'PK AUTO_INCREMENT', name: 'VARCHAR' });\nT.expect(users.schema.id === 'PK', 'Should have primary key');" },
        { text: "Implement foreign key relationship between tables.",
          test: "const orders = createTable('orders', { id: 'PK AUTO_INCREMENT', user_id: 'FK users.id' });\nT.expect(orders.foreignKeys.user_id, 'orders should have foreign key to users');" },
        { text: "Simulate CASCADE delete behavior.",
          test: "T.expect(typeof cascadeDelete === 'function', 'Create cascadeDelete function');\ncascadeDelete('users', 1);\nT.expect(T.logged('Deleted order'), 'Should cascade delete related orders');" },
        { text: "Implement referential integrity check (prevent invalid foreign keys).",
          test: "T.expect(typeof checkForeignKey === 'function', 'Create checkForeignKey function');\nconst valid = checkForeignKey('orders', 'user_id', 999);\nT.expect(!valid, 'Should reject invalid foreign key');" }
      ],
      files: [
        { name: "script.js", content: "// Database schema with primary and foreign keys\n\nconst database = {\n  tables: {},\n  data: {}\n};\n\nfunction createTable(name, schema) {\n  // Create table with schema\n  // Schema format: { column: 'PK AUTO_INCREMENT' | 'FK table.column' | 'TYPE' }\n}\n\nfunction addForeignKey(tableName, column, referencesTable, referencesColumn) {\n  // Add foreign key constraint\n}\n\nfunction cascadeDelete(tableName, id) {\n  // Delete row and cascade to related tables\n}\n\nfunction checkForeignKey(tableName, column, value) {\n  // Check if foreign key value exists in referenced table\n}\n\n// Create tables\nconsole.log('=== Creating Tables ===');\nconst users = createTable('users', {\n  id: 'PK AUTO_INCREMENT',\n  name: 'VARCHAR',\n  email: 'VARCHAR'\n});\n\nconst orders = createTable('orders', {\n  id: 'PK AUTO_INCREMENT',\n  user_id: 'FK users.id',\n  product: 'VARCHAR',\n  quantity: 'INT'\n});\n\nconsole.log('Users schema:', users.schema);\nconsole.log('Orders schema:', orders.schema);\nconsole.log('Foreign keys:', orders.foreignKeys);\n\n// Test referential integrity\nconsole.log('\\n=== Testing Referential Integrity ===');\nconsole.log('Valid foreign key (user exists):', checkForeignKey('orders', 'user_id', 1));\nconsole.log('Invalid foreign key (user does not exist):', checkForeignKey('orders', 'user_id', 999));\n\n// Test cascade delete\nconsole.log('\\n=== Testing Cascade Delete ===');\n// Add some test data first\ndatabase.data.users = [\n  { id: 1, name: 'Alice', email: 'alice@example.com' },\n  { id: 2, name: 'Bob', email: 'bob@example.com' }\n];\n\ndatabase.data.orders = [\n  { id: 1, user_id: 1, product: 'Laptop', quantity: 1 },\n  { id: 2, user_id: 1, product: 'Mouse', quantity: 2 },\n  { id: 3, user_id: 2, product: 'Keyboard', quantity: 1 }\n];\n\nconsole.log('Before delete:');\nconsole.log('Users:', database.data.users);\nconsole.log('Orders:', database.data.orders);\n\ncascadeDelete('users', 1);\n\nconsole.log('\\nAfter deleting user 1:');\nconsole.log('Users:', database.data.users);\nconsole.log('Orders:', database.data.orders);\n" }
      ],
      hints: [
        "Parse schema to identify primary keys (PK) and foreign keys (FK)",
        "Store foreign key relationships in the table metadata",
        "For cascade delete, find all related rows in child tables and delete them first",
        "For referential integrity, check if the foreign key value exists in the referenced table's primary key"
      ],
      solution: {
        "script.js": "// Database schema with primary and foreign keys\n\nconst database = {\n  tables: {},\n  data: {},\n  nextIds: {}\n};\n\nfunction createTable(name, schema) {\n  const table = {\n    name: name,\n    schema: {},\n    primaryKey: null,\n    foreignKeys: {}\n  };\n  \n  Object.entries(schema).forEach(([column, definition]) => {\n    table.schema[column] = definition;\n    \n    if (definition.includes('PK')) {\n      table.primaryKey = column;\n      database.nextIds[name] = 1;\n    }\n    \n    if (definition.includes('FK')) {\n      const match = definition.match(/FK\\s+(\\w+)\\.(\\w+)/i);\n      if (match) {\n        const [, refTable, refColumn] = match;\n        table.foreignKeys[column] = { table: refTable, column: refColumn };\n      }\n    }\n  });\n  \n  database.tables[name] = table;\n  database.data[name] = [];\n  \n  return table;\n}\n\nfunction addForeignKey(tableName, column, referencesTable, referencesColumn) {\n  if (database.tables[tableName]) {\n    database.tables[tableName].foreignKeys[column] = {\n      table: referencesTable,\n      column: referencesColumn\n    };\n  }\n}\n\nfunction cascadeDelete(tableName, id) {\n  const table = database.tables[tableName];\n  if (!table) return;\n  \n  // Find all tables that reference this table\n  Object.entries(database.tables).forEach(([otherTableName, otherTable]) => {\n    Object.entries(otherTable.foreignKeys).forEach(([column, ref]) => {\n      if (ref.table === tableName) {\n        // Delete related rows\n        const relatedRows = database.data[otherTableName].filter(row => row[column] === id);\n        relatedRows.forEach(row => {\n          const index = database.data[otherTableName].indexOf(row);\n          if (index > -1) {\n            database.data[otherTableName].splice(index, 1);\n            console.log(`Deleted row from ${otherTableName} with ${column}=${id}`);\n          }\n        });\n      }\n    });\n  });\n  \n  // Delete the main row\n  const rowIndex = database.data[tableName].findIndex(row => row[table.primaryKey] === id);\n  if (rowIndex > -1) {\n    database.data[tableName].splice(rowIndex, 1);\n    console.log(`Deleted row from ${tableName} with id=${id}`);\n  }\n}\n\nfunction checkForeignKey(tableName, column, value) {\n  const table = database.tables[tableName];\n  if (!table || !table.foreignKeys[column]) return true;\n  \n  const ref = table.foreignKeys[column];\n  const refTable = database.tables[ref.table];\n  \n  if (!refTable || !database.data[ref.table]) return false;\n  \n  return database.data[ref.table].some(row => row[ref.column] === value);\n}\n\n// Create tables\nconsole.log('=== Creating Tables ===');\nconst users = createTable('users', {\n  id: 'PK AUTO_INCREMENT',\n  name: 'VARCHAR',\n  email: 'VARCHAR'\n});\n\nconst orders = createTable('orders', {\n  id: 'PK AUTO_INCREMENT',\n  user_id: 'FK users.id',\n  product: 'VARCHAR',\n  quantity: 'INT'\n});\n\nconsole.log('Users schema:', users.schema);\nconsole.log('Orders schema:', orders.schema);\nconsole.log('Foreign keys:', orders.foreignKeys);\n\n// Test referential integrity\nconsole.log('\\n=== Testing Referential Integrity ===');\nconsole.log('Valid foreign key (user exists):', checkForeignKey('orders', 'user_id', 1));\nconsole.log('Invalid foreign key (user does not exist):', checkForeignKey('orders', 'user_id', 999));\n\n// Test cascade delete\nconsole.log('\\n=== Testing Cascade Delete ===');\ndatabase.data.users = [\n  { id: 1, name: 'Alice', email: 'alice@example.com' },\n  { id: 2, name: 'Bob', email: 'bob@example.com' }\n];\n\ndatabase.data.orders = [\n  { id: 1, user_id: 1, product: 'Laptop', quantity: 1 },\n  { id: 2, user_id: 1, product: 'Mouse', quantity: 2 },\n  { id: 3, user_id: 2, product: 'Keyboard', quantity: 1 }\n];\n\nconsole.log('Before delete:');\nconsole.log('Users:', database.data.users);\nconsole.log('Orders:', database.data.orders);\n\ncascadeDelete('users', 1);\n\nconsole.log('\\nAfter deleting user 1:');\nconsole.log('Users:', database.data.users);\nconsole.log('Orders:', database.data.orders);\n"
      }
    },

    {
      id: "db-u2-5",
      title: "Indexes for query performance",
      kind: "js", chip: "DB", xp: 15, mins: 12,
      brief: **Indexes** dramatically speed up queries but slow down writes. They're essential for performance on large tables.\n\n**Index types**:\n- **B-tree**: default, good for equality and range queries\n- **Hash**: exact matches only\n- **Composite**: multiple columns\n- **Unique**: enforces uniqueness\n\n**When to index**: columns in WHERE, JOIN, ORDER BY, GROUP BY.",
      example: { lang: "sql", code: "-- Create index\nCREATE INDEX idx_users_email ON users(email);\n\n-- Composite index\nCREATE INDEX idx_orders_user_date ON orders(user_id, created_at);\n\n-- Unique index\nCREATE UNIQUE INDEX idx_users_email ON users(email);\n\n-- Check if index exists\nSHOW INDEX FROM users;" },
      steps: [
        { text: "Create an index system for tables.",
          test: "T.expect(typeof createIndex === 'function', 'Create createIndex function');\ncreateIndex('users', 'email');\nT.expect(database.indexes.users.email, 'Should create index on email');" },
        { text: "Implement query performance comparison with and without index.",
          test: "T.expect(typeof queryWithIndex === 'function', 'Create queryWithIndex function');\nconst { withIndex, withoutIndex } = queryWithIndex('users', 'email', 'alice@example.com');\nT.expect(withIndex < withoutIndex, 'Indexed query should be faster');" },
        { text: "Add composite index support.",
          test: "createIndex('orders', ['user_id', 'created_at']);\nT.expect(database.indexes.orders['user_id,created_at'], 'Should create composite index');" },
        { text: "Implement unique index constraint.",
          test: "T.expect(typeof createUniqueIndex === 'function', 'Create createUniqueIndex function');\ncreateUniqueIndex('users', 'email');\nT.expect(database.indexes.users.email.unique, 'Should mark index as unique');" }
      ],
      files: [
        { name: "script.js", content: "// Database indexing system\n\nconst database = {\n  tables: {},\n  data: {},\n  indexes: {}\n};\n\nfunction createTable(name, schema) {\n  database.tables[name] = { schema };\n  database.data[name] = [];\n  database.indexes[name] = {};\n}\n\nfunction createIndex(tableName, column) {\n  // Create index on column\n}\n\nfunction createUniqueIndex(tableName, column) {\n  // Create unique index (enforces uniqueness)\n}\n\nfunction queryWithIndex(tableName, column, value) {\n  // Compare query performance with and without index\n  // Return: { withIndex, withoutIndex }\n}\n\n// Setup test data\ncreateTable('users', { id: 'INT', name: 'VARCHAR', email: 'VARCHAR' });\ncreateTable('orders', { id: 'INT', user_id: 'INT', created_at: 'DATE', product: 'VARCHAR' });\n\n// Add test data\nfor (let i = 1; i <= 1000; i++) {\n  database.data.users.push({\n    id: i,\n    name: `User ${i}`,\n    email: `user${i}@example.com`\n  });\n}\n\nfor (let i = 1; i <= 5000; i++) {\n  database.data.orders.push({\n    id: i,\n    user_id: (i % 1000) + 1,\n    created_at: `2024-01-${(i % 28) + 1}`,\n    product: `Product ${i % 10}`\n  });\n}\n\nconsole.log('=== Test Data Loaded ===');\nconsole.log(`Users: ${database.data.users.length} rows`);\nconsole.log(`Orders: ${database.data.orders.length} rows`);\n\n// Test single column index\nconsole.log('\\n=== Creating Index ===');\ncreateIndex('users', 'email');\nconsole.log('Indexes:', database.indexes.users);\n\nconsole.log('\\n=== Query Performance Test ===');\nconst perf = queryWithIndex('users', 'email', 'user500@example.com');\nconsole.log(`Without index: ${perf.withoutIndex} operations`);\nconsole.log(`With index: ${perf.withIndex} operations`);\nconsole.log(`Speedup: ${(perf.withoutIndex / perf.withIndex).toFixed(2)}x`);\n\n// Test composite index\nconsole.log('\\n=== Composite Index ===');\ncreateIndex('orders', ['user_id', 'created_at']);\nconsole.log('Indexes:', database.indexes.orders);\n\n// Test unique index\nconsole.log('\\n=== Unique Index ===');\ncreateUniqueIndex('users', 'email');\nconsole.log('Indexes:', database.indexes.users);\n" }
      ],
      hints: [
        "For createIndex: store a map of column values to row positions for O(1) lookup",
        "For queryWithIndex: simulate performance by counting operations — with index = 1 (hash lookup), without = table scan (N operations)",
        "For composite index: create a combined key from multiple columns",
        "For unique index: add a uniqueness flag and check for duplicates when creating the index"
      ],
      solution: {
        "script.js": "// Database indexing system\n\nconst database = {\n  tables: {},\n  data: {},\n  indexes: {}\n};\n\nfunction createTable(name, schema) {\n  database.tables[name] = { schema };\n  database.data[name] = [];\n  database.indexes[name] = {};\n}\n\nfunction createIndex(tableName, column) {\n  const columns = Array.isArray(column) ? column : [column];\n  const indexKey = columns.join(',');\n  \n  const index = new Map();\n  database.data[tableName].forEach((row, rowIndex) => {\n    const key = columns.map(col => row[col]).join('|');\n    if (!index.has(key)) {\n      index.set(key, []);\n    }\n    index.get(key).push(rowIndex);\n  });\n  \n  database.indexes[tableName][indexKey] = { index, columns, unique: false };\n}\n\nfunction createUniqueIndex(tableName, column) {\n  const columns = Array.isArray(column) ? column : [column];\n  const indexKey = columns.join(',');\n  \n  const index = new Map();\n  const seen = new Set();\n  \n  database.data[tableName].forEach((row, rowIndex) => {\n    const key = columns.map(col => row[col]).join('|');\n    if (seen.has(key)) {\n      console.warn(`Duplicate value for unique index: ${key}`);\n    }\n    seen.add(key);\n    \n    if (!index.has(key)) {\n      index.set(key, []);\n    }\n    index.get(key).push(rowIndex);\n  });\n  \n  database.indexes[tableName][indexKey] = { index, columns, unique: true };\n}\n\nfunction queryWithIndex(tableName, column, value) {\n  const table = database.tables[tableName];\n  const indexKey = column;\n  const hasIndex = database.indexes[tableName] && database.indexes[tableName][indexKey];\n  \n  // Simulate query without index (table scan)\n  let withoutIndexOps = 0;\n  for (const row of database.data[tableName]) {\n    withoutIndexOps++;\n    if (row[column] === value) break;\n  }\n  \n  // Simulate query with index (hash lookup)\n  let withIndexOps = 1; // Hash lookup is O(1)\n  if (hasIndex) {\n    const index = database.indexes[tableName][indexKey].index;\n    withIndexOps = index.has(String(value)) ? 1 : 1;\n  }\n  \n  return {\n    withIndex: withIndexOps,\n    withoutIndex: withoutIndexOps\n  };\n}\n\n// Setup test data\ncreateTable('users', { id: 'INT', name: 'VARCHAR', email: 'VARCHAR' });\ncreateTable('orders', { id: 'INT', user_id: 'INT', created_at: 'DATE', product: 'VARCHAR' });\n\nfor (let i = 1; i <= 1000; i++) {\n  database.data.users.push({\n    id: i,\n    name: `User ${i}`,\n    email: `user${i}@example.com`\n  });\n}\n\nfor (let i = 1; i <= 5000; i++) {\n  database.data.orders.push({\n    id: i,\n    user_id: (i % 1000) + 1,\n    created_at: `2024-01-${(i % 28) + 1}`,\n    product: `Product ${i % 10}`\n  });\n}\n\nconsole.log('=== Test Data Loaded ===');\nconsole.log(`Users: ${database.data.users.length} rows`);\nconsole.log(`Orders: ${database.data.orders.length} rows`);\n\nconsole.log('\\n=== Creating Index ===');\ncreateIndex('users', 'email');\nconsole.log('Indexes:', database.indexes.users);\n\nconsole.log('\\n=== Query Performance Test ===');\nconst perf = queryWithIndex('users', 'email', 'user500@example.com');\nconsole.log(`Without index: ${perf.withoutIndex} operations`);\nconsole.log(`With index: ${perf.withIndex} operations`);\nconsole.log(`Speedup: ${(perf.withoutIndex / perf.withIndex).toFixed(2)}x`);\n\nconsole.log('\\n=== Composite Index ===');\ncreateIndex('orders', ['user_id', 'created_at']);\nconsole.log('Indexes:', database.indexes.orders);\n\nconsole.log('\\n=== Unique Index ===');\ncreateUniqueIndex('users', 'email');\nconsole.log('Indexes:', database.indexes.users);\n"
      }
    },

    {
      id: "db-quiz-2",
      title: "Unit 2 quiz: Database Design & Normalization",
      kind: "quiz", xp: 10,
      brief: "Normalization (1NF, 2NF, 3NF), keys, foreign keys, and indexes. 80% to pass.",
      questions: [
        { q: "What does 1NF require?",
          choices: ["No repeating groups, atomic values", "No partial dependencies", "No transitive dependencies", "Primary key on every table"],
          answer: 0, explain: "First Normal Form requires eliminating repeating groups and ensuring each column contains atomic (indivisible) values." },
        { q: "What's a partial dependency?",
          choices: ["A column depending on another non-key column", "A column depending on only part of a composite key", "A column depending on the entire primary key", "A column with NULL values"],
          answer: 1, explain: "Partial dependency occurs when a non-key column depends on only part of a composite primary key. 2NF removes these." },
        { q: "What does 3NF eliminate?",
          choices: ["Repeating groups", "Partial dependencies", "Transitive dependencies", "Foreign keys"],
          answer: 2, explain: "Third Normal Form eliminates transitive dependencies where non-key columns depend on other non-key columns instead of directly on the primary key." },
        { q: "What's the purpose of a foreign key?",
          choices: ["To uniquely identify rows", "To link tables and enforce referential integrity", "To speed up queries", "To ensure uniqueness"],
          answer: 1, explain: "Foreign keys link tables together and enforce referential integrity, ensuring that related data exists across tables." },
        { q: "What does CASCADE delete do?",
          choices: ["Prevents deletion if related rows exist", "Automatically deletes related rows", "Sets foreign key to NULL", "Creates a backup before deletion"],
          answer: 1, explain: "CASCADE delete automatically deletes related rows in child tables when a parent row is deleted." },
        { q: "When should you create an index?",
          choices: ["On every column", "Only on primary keys", "On columns used in WHERE, JOIN, ORDER BY", "Never, indexes slow down everything"],
          answer: 2, explain: "Index columns used in WHERE clauses, JOIN conditions, ORDER BY, and GROUP BY for performance. Don't over-index as they slow down writes." }
      ]
    }
  ]
});