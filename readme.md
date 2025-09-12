# Global Objects in JavaScript

## Example Code
```js
var name = "Namaste Node Js";  
console.log(name);  

console.log(global);        // Node.js global object  
console.log(this);          // {} (empty object in Node.js module scope)  

console.log(globalThis);    // ✅ Universal global object


🔑 Key Points
1. Global in Node.js

global → The global object in Node.js.

this → Refers to module.exports in the current file, so it shows {}.

globalThis → Standard universal keyword for the global object.

2. Global in Browser

window → Global object in browsers.

this → Refers to window in the global scope.

self → Another reference to the global object (used in Web Workers).

frames → Legacy reference to the global object (window frames).

3. Other JavaScript Engines

Different environments have their own global objects:

Node.js → global

Browser → window, self, frames

Other JS engines → May define their own

4. Why globalThis?

Created to standardize global access across all environments.

Avoids conflicts with existing names (window, global, self).

✅ Use globalThis for writing environment-independent JavaScript.

📌 Quick Comparison
Environment	Global Object(s)	Notes
Node.js	global	this = {} in module scope
Browser	window, self, frames	this = window in global scope
Standard JS	globalThis	Works everywhere
✅ Conclusion

Always use globalThis for consistent, cross-environment JavaScript development.

----------------------------------------------------------------------

## 🚀 Running the Project

To start the project, run the following command:

node app.js
📌 Notes:
app.js is the entry point of the project.

Every piece of code we write (functions, modules, classes, etc.) should be called or imported through this file.

Think of app.js as the main controller — it organizes and runs the rest of your project.

This ensures our project has a single starting point, making it easier to debug and maintain.
