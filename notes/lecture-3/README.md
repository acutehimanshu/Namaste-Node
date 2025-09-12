
# Episode-03 | Writing Code with Node.js

## 1. Installing Node.js
Download and install Node.js from the official website:  
👉 [https://nodejs.org/en](https://nodejs.org/en)

---

## 2. Verify Installation
After installation, open your terminal (Command Prompt, PowerShell, or VSCode Terminal) and run:

```bash
node -v
```

- This command checks the installed **Node.js version**.  
- If Node.js is not installed properly, you will get an error like **command not found**.

```bash
npm -v
```

- This command checks the installed **NPM (Node Package Manager)** version.  
- NPM comes bundled with Node.js.

---

## 3. Node REPL (Read, Evaluate, Print, Loop)
To start REPL, run:

```bash
node
```

Now you can type and execute any JavaScript code directly, similar to a **browser console**.

Example:
```js
> let a = 5;
> let b = 10;
> a + b;
15
```

➡ This is all running inside the **Node.js runtime environment**, powered by the **V8 engine**.

⚠️ But REPL is not ideal for writing long programs. Instead, let’s move to VSCode.

---

## 4. Writing Code in VSCode

1. **Create a Folder** → Example: `my-nodejs-project`  
2. **Open the Folder in VSCode** → `File > Open Folder`  
3. **Create a File** → Inside the folder, make a new file called `app.js`  
4. **Write Code** → Example:

```js
let name = "Node JS 03";
let a = 5;
let b = 10;
let c = a + b;

console.log(name);
console.log(c);
```

5. **Run Code** → Open terminal in VSCode (**Ctrl + `**) and type:

```bash
node app.js
```

➡ Output:
```
Node JS 03
15
```

---

## 5. Global Objects in Node.js

- In **browsers**, the global object is `window`.  
- In **Node.js**, the global object is `global`.  
- Node.js also introduced **globalThis** (ECMAScript 2020), which works across all environments.

📖 MDN Reference: [Global Object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)

### Example in Node.js
```js
console.log(global);      // Prints many Node.js global properties
console.log(this);        // Outputs: {} (empty object)
console.log(globalThis);  // Same as global in Node.js
```

### Key Notes:
- `this` at the top-level in Node.js is **not** the global object (unlike in browsers).  
- `globalThis` is always the **global object**, no matter the environment.  
- Examples of global functions in Node.js:  
  - `setTimeout()`  
  - `setInterval()`  
  - `console.log()`  

---

## Conclusion
- Install Node.js → verify with `node -v` & `npm -v`  
- Use **REPL** for quick experiments, but use **VSCode** for real projects  
- Understand **global objects**:  
  - Browser → `window`  
  - Node.js → `global`  
  - Universal → `globalThis`  
