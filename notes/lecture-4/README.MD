
# Lecture 4: module.exports & require

## 🔹 CommonJS (CJS)

👉 Default in **Node.js** (`"type": "commonjs"` or no `"type"` in `package.json`)

**File1.js**

```js
function name() {
    console.log("Hello from CommonJS");
}
module.exports = name; // exporting function
```

**File2.js**

```js
const functionName = require("./File1.js"); // importing function
functionName(); // call it
```

---

## 🔹 ES Modules (ESM)

👉 Enabled with `"type": "module"` in `package.json`

**File1.js**

```js
export function name() {
    console.log("Hello from ES Module");
}
```

**File2.js**

```js
import { name } from "./File1.js"; // importing named export
name(); // call it
```

✅ **Notes:**

* In **ESM**, file extensions (`.js`, `.mjs`) are **required** when importing.
* In **CJS**, file extension is **optional**.

---

## 🔎 CJS vs ESM

| Feature                 | **CommonJS (CJS)**                                                                | **ES Modules (ESM)**                                                                |
| ----------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Syntax**              | `module.exports` / `require()`                                                    | `export` / `import`                                                                 |
| **Default Mode**        | Default in **Node.js** (if `"type": "commonjs"` or no `"type"` in `package.json`) | Default in **React, Angular, Next.js** and in Node.js when `"type": "module"`       |
| **Age**                 | Older way (used before ES6)                                                       | Newer way (introduced in ES6, 2015)                                                 |
| **Execution**           | **Synchronous** (blocks while loading)                                            | **Asynchronous** (non-blocking, can be top-level `await`)                           |
| **Strict Mode**         | Not strict by default (you can use `'use strict'` manually)                       | Always **strict mode** by default                                                   |
| **Exports**             | Single export object via `module.exports` (can be function, object, etc.)         | Named exports (`export`) and default export (`export default`)                      |
| **Imports**             | Destructuring required manually (`const { x } = require(...)`)                    | Supports both named imports and default imports directly                            |
| **File Extensions**     | `.js` works without extension                                                     | Must specify extension (`.js`, `.mjs`) in imports                                   |
| **Tree Shaking**        | ❌ Not supported                                                                   | ✅ Supported (dead code elimination in bundlers)                                     |
| **Top-level `await`**   | ❌ Not supported                                                                   | ✅ Supported                                                                         |
| **Dynamic Import**      | Possible via `require()` (sync)                                                   | Supported via `import()` (async, returns a Promise)                                 |
| **Where Commonly Used** | Node.js backend, older projects                                                   | React, Angular, Vue, modern Node.js projects                                        |
| **Interoperability**    | Can import ESM with some limitations (needs `esm` loader or `import()`)           | Can import CJS via `import pkg from "cjs-package"` (works, but only default export) |

---

## ✅ Examples

### CommonJS Example

**File1.js**

```js
function greet(name) {
  return `Hello, ${name}`;
}
module.exports = greet;
```

**File2.js**

```js
const greet = require("./File1.js");
console.log(greet("Himanshu"));
```

---

### ES Module Example

**File1.js**

```js
export function greet(name) {
  return `Hello, ${name}`;
}
```

**File2.js**

```js
import { greet } from "./File1.js";
console.log(greet("Himanshu"));
```

---

## 📂 Creating a Collection (Calculator Example)

We can group multiple files inside a **directory** (e.g., `calculator/`) and export them together.

**📁 calculator/sum.js**

```js
function sum(a, b) {
    return a + b;
}
module.exports = sum;
```

**📁 calculator/multiple.js**

```js
function multiple(a, b) {
    return a * b;
}
module.exports = multiple;
```

**📁 calculator/index.js**

```js
const sum = require('./sum');
const multiple = require('./multiple');

module.exports = {
    sum,
    multiple
};
```

**📄 app.js**

```js
const { sum, multiple } = require('./calculator');

const name = "Lecture 4: Namaste Node";
const a = 10;
const b = 20;
const c = 30;

console.log(sum(a, b));       // 30
console.log(multiple(a, c));  // 300
console.log(name);
```

👉 Here, we imported **multiple functionalities** (`sum`, `multiple`) from a **single require statement** (`./calculator`).


## 📂 Working with JSON in Node.js

Node.js allows you to import and use JSON files directly.

**📄 data.json**

```json
{
  "name": "Himanshu",
  "age": 25,
  "city": "Indore"
}
```

**📄 app.js (CommonJS)**

```js
const data = require("./data.json"); // Directly import JSON
console.log(data.name); // Himanshu
console.log(data.age);  // 25
```

**📄 app.mjs (ESM)**

```js
import data from "./data.json" assert { type: "json" };
console.log(data.name); // Himanshu
console.log(data.city); // Indore
```

👉 In **ESM**, you must use `assert { type: "json" }` to import JSON.
👉 In **CJS**, you can `require()` JSON directly without extra syntax.

---

## ⚡ Using Node.js Built-in Modules

Node.js ships with a variety of **core modules** (e.g., `fs`, `http`, `path`, `util`) that you can use without installing anything.

Example with `util`:

**📄 app.js**

```js
const util = require("node:util"); // Import Node.js built-in 'util' module

// Example: format strings
const greeting = util.format("Hello, %s! You are %d years old.", "Himanshu", 25);
console.log(greeting); // Hello, Himanshu! You are 25 years old.

// Example: debugging
const obj = { name: "Himanshu", age: 25, skills: ["JS", "Node"] };
console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));
```

👉 You can explore more built-in modules in the [Node.js Documentation](https://nodejs.org/api/).

---
function (){
    // all code wrapped here
}
That’s ✅ correct in principle.
⚠️ But you should clarify: Node does not wrap modules in a normal function, but in a special function with parameters:

(function(exports, require, module, __filename, __dirname) { ... })