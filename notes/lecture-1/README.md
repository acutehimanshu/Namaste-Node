
# Node.js Overview

## Introduction
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is maintained by the **OpenJS Foundation**.  
Node.js allows JavaScript to be executed **outside of a web browser**. This means that while JavaScript is traditionally associated with the web and browsers, Node.js extends its reach, allowing you to run JavaScript code on **servers, desktops, and even embedded systems**.  
This is why Node.js is often described with the phrase:  
**"Run JavaScript Everywhere."**

Node.js features an **event-driven architecture** and supports **asynchronous I/O (non-blocking I/O)**.

---

## History

- **2009** → Node.js was built by **Ryan Dahl**.  
- To run JavaScript, you always need a **JS engine**. Everywhere you write JS code, there is a JS engine executing it.  
- Ryan first used the **SpiderMonkey JS Engine** (used in Firefox), but after two days he switched to **V8 (Chrome’s engine)** and never looked back.

- Ryan was initially working independently, but **Joyent**, a company working on a similar idea, hired him and funded the project. Joyent made a big contribution to Node.js.  

- The earlier name of Node.js was **Web.js**, but Ryan renamed it to **Node.js**, since it was meant for more than just web servers.

---

## Motivation

At that time, **Apache HTTP Server** was blocking in nature. Ryan wanted to build a **non-blocking server**, which led to the creation of Node.js as a **non-blocking I/O system**.  
The key advantage of a non-blocking server: it can handle **multiple requests with fewer threads**.

---

## Key Milestones

- **2010** → **NPM (Node Package Manager)** introduced.  
  - Played a **critical role** in Node.js success.  
  - Without NPM, Node.js may not have been this popular.  

- **Initially** → Node.js was only for **macOS & Linux**.  
- **2011** → Support added for **Microsoft Windows**.  

- **2012** → **Isaac Z. Schlueter** (creator of NPM) began maintaining Node.js.  

- **2014** → A fork called **io.js** was created by **Fedor** and maintained by 3–4 developers, leading to a split.  

- **2015** → Node.js and io.js merged again under the **Node.js Foundation**.  

- **2019** → The **JS Foundation** and the **Node.js Foundation** merged to form the **OpenJS Foundation**, which now maintains Node.js.  

---

## Conclusion
Node.js has revolutionized the way JavaScript is used, extending its power beyond browsers into servers and systems worldwide.  
Its **non-blocking architecture**, **NPM ecosystem**, and **community-driven development** have made it a cornerstone of modern software development.
