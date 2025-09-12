
# Episode-02 | JavaScript on the Server

## Q: What is a Server?
A **server** is essentially a remote computer. You can think of it as a computer whose **CPU works remotely**.  
Servers can be accessed over a network to provide **resources** and **services** to other computer programs.  

- A server provides **data, services, resources, or programs** to other computers, known as **clients**, over a network.  
- Behind the scenes, when a client computer needs to communicate with a server, it sends a **request** to the server using its **IP address**.  

Initially, JavaScript could only be executed **inside web browsers**, limiting its use to client-side tasks.  
However, with the introduction of **Node.js**, JavaScript can now also be executed on **servers**, allowing developers to use the **same language** for both **client-side** and **server-side** programming.

---

## Q: What is an IP Address?
An **IP address (Internet Protocol address)** is a unique number that identifies every device connected to the internet.  
It acts like a digital "home address" for devices, ensuring data is sent to the correct destination.

---

## Q: What is V8?
The **V8 JavaScript engine** is written in **C++**.  

- V8 can be **embedded** into any C++ program, which is a crucial feature.  
- JavaScript code is executed by **V8**, which then compiles it down to **machine code** that the computer can execute.  

**Node.js** itself is a **C++ application** with the **V8 engine embedded** into it.  

---

## ECMAScript Standard
- **ECMAScript** is a standard for scripting languages, including JavaScript, JScript, and ActionScript.  
- It defines the **rules and behavior** of the JavaScript language.  
- JavaScript engines like **V8**, **SpiderMonkey**, **Chakra**, and others follow the **ECMAScript standards** to ensure consistent behavior across different environments.  

⚡ Node.js uses the **V8 engine** but also provides **superpowers** like:  
- File System Access  
- Database Connections  
- Network & API Calls  

These extra capabilities make Node.js a **JavaScript Runtime Environment**, going beyond what V8 alone can do.  

---

## How JavaScript Runs with V8
Ever wonder how your JavaScript code comes to life? 🤔  

- We write **high-level JS code**.  
- The **V8 engine** translates it into **machine code** (also called **low-level code**).  
- The machine executes this code directly, powering your applications.  

This transformation allows developers to write code in a **human-readable language** while the machine executes **efficient, low-level instructions**.

---

## Low-Level Code Explained

Low-level code refers to programming languages or code that is **closer to machine language and hardware**.  
It provides little abstraction from the computer's architecture and allows for fine-grained control over system resources.  

### Key Types:
1. **Machine Language** → The most basic form of low-level code, consisting of **binary (0s and 1s)** instructions that the CPU executes directly.  
2. **Assembly Language** → A step above machine language. It uses **mnemonics** (symbols like `MOV`, `ADD`) for operations and memory addresses. Each assembly instruction corresponds to a specific machine instruction.  

---

## Conclusion
- A **server** is a remote computer serving resources to clients.  
- **IP addresses** uniquely identify devices.  
- The **V8 engine (C++)** compiles JavaScript into **machine code**.  
- **ECMAScript standards** ensure JavaScript works consistently across environments.  
- **Node.js** = V8 + additional features → a **runtime** that lets us use JavaScript for servers, APIs, databases, and more.  

With Node.js, JavaScript is no longer just a browser language. It has become a **full-stack language**, running **everywhere** – from browsers to servers and even IoT devices.
