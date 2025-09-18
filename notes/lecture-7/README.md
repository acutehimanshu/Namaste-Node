# Episode-07 | Sync, Async, setTimeout(0) & pbkdf2

## 🟠 Synchronous vs Asynchronous

### Synchronous (Sync)
- Code runs **line by line**, in sequence.  
- Each task **blocks** the next one until it finishes.  
- Example:
```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
// Output: Task 1 → Task 2 → Task 3
````

### Asynchronous (Async)

* Tasks can be **delegated** (to libuv or OS).
* They are executed **later**, once the main call stack is free.
* This allows **non-blocking I/O** and multiple operations happening “in parallel.”

---

## 🟠 setTimeout with 0 ms

```js
setTimeout(() => {
    console.log("Execute immediately");
}, 0);
```

* `setTimeout` is **asynchronous**.
* Even if you set the delay to **0 ms**, the callback does **not run immediately**.
* Why?

  * Because the code is sent to **libuv**.
  * libuv schedules it in the **callback queue**.
  * It can only run once the **call stack is empty**.

✅ So the callback runs **after all synchronous code finishes**, not “instantly.”

---

## 🟠 Code Example

```js
console.log("Hello");

var a, b = 100, 200;

setTimeout(() => {
    console.log("Execute immediately");
}, 0);

setTimeout(() => {
    console.log("Execute after 3 seconds");
}, 3000);

function multiple(a, b) {
    return a * b;
}

var c = multiple(a, b);
console.log(`Multiplication of ${a} & ${b} is ${c}`, a, b, c);
```

### Expected Output (your assumption)

```
Hello
Execute immediately
Multiplication of 100 & 200 is 20000
Execute after 3 seconds
```

### Real Output

```
Hello
Multiplication of 100 & 200 is 20000
Execute immediately
Execute after 3 seconds
```

📌 Why different?

* Because `setTimeout(..., 0)` is **async** → it waits until the **call stack is clear**.
* The synchronous multiplication runs first, then the async callback executes.

---

## 🟠 crypto.pbkdf2

* **PBKDF2** = Password-Based Key Derivation Function 2.
* It is a **key-stretching algorithm** used for secure password hashing.
* In Node.js, provided by the `crypto` module.
* Usage example:

```js
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 100000, 64, "sha512", (err, key) => {
  if (err) throw err;
  console.log("Derived key:", key.toString("hex"));
});
```

---

## 🟠 if / else (Conditional Statement)

* **if** → used to run a block of code **only if a condition is true**.
* **else** → defines a block of code that runs when the condition is **false**.

Example:

```js
let number = 10;

if (number > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is 5 or smaller");
}
```

Output:

```
Number is greater than 5
```

---

## 🟠 Important Keywords Recap

* **Synchronous** → Executes line by line, blocking.
* **Asynchronous** → Offloads tasks, executes later (non-blocking).
* **setTimeout** → Asynchronous function to schedule code after a delay.
* **Event Loop** → Mechanism that checks the call stack & callback queue to decide what runs next.
* **libuv** → C library powering Node.js async I/O.
* **PBKDF2** → Secure password hashing function (from `crypto`).
* **if/else** → Conditional statement to control program flow.

---

## ✅ Conclusion

* Node.js mixes **sync (blocking)** and **async (non-blocking)** code.
* `setTimeout(0)` is **not immediate** — it waits for the stack to clear.
* Async tasks are handled by **libuv** and scheduled via the **event loop**.
* `crypto.pbkdf2` is a secure way to hash passwords.
* `if/else` adds decision-making power to programs.

```

Do you also want me to **draw a simple ASCII event loop diagram** in this lecture (like: Call Stack → libuv → Callback Queue → Event Loop → Back to Call Stack) so readers can visualize why `setTimeout(0)` runs late?
```
