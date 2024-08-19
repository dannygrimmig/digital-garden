---
title: 'Understanding the Event Loop'
exerpt: 'Taking what I have learned from creating accessible web pages and components and putting into helpful guide.'
date: '2024-08-18'
author: 'Danny Grimmig'
tags: ['javascript', 'web dev']
image: 
    src: "https://miro.medium.com/v2/resize:fit:1400/1*1o0qd3BFcx2VuQJYAgOOzg.png"
    citation: 'Kamlesh Singh | Medium '
---
The [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop) is the runtime model, determining how your JS is processed and rendered in the browser. Javascript is a Single-threaded programming language, so understanding the event loop will help you create fast and effecient UI's.

## Single Threading & The Call Stack
Javascript is a single threaded programming language executing only one task at a time, but what exactly does that mean?

Open up the developer console, type `alert('Hello World')`, and click enter. Now before clicking `OK` on the window pop up, you will notice you can no longer scroll or interact with this page. In Javascript, there is one single call stack working to execute your code one at a time; here, JS has this `alert` at the top of the call stack and cannot move forward until you pop it from that stack.

Now rather than this example, imaging a long fetch request from an API (or even multiple). To handle the above scenario, a call stack stuck on one task, Javascript relies on the event loop.

## Asynchronous JS: Concurrency and the Event Loop
The event loop allows Javascript to perform asynchronous operations freeing up the call stack from getting blocked by a long or stuck operation. Here is how it works...

**The Call Stack**
- The call stack is where Javascript keeps track of function calls. Invoking function adds to stack, completing function removes from stack.

**Web API's**
- Asynchronous operations from The Call Stack are handled by Web API's (freeing the stack)

**Task Queue**
- Once asynchronous functions (from the Web API's) complete, its callback function is passed to the task queue (where it waits)

**The Event Loop**
- The event loop continuously checks the call stack. Once the call stack is empty, the event loop passes functions from the Task Queue onto the stack to be executed.

### Example
**JavaScript**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("This timeout is 0 seconds long");
}, 0);

console.log("End");
```

**Console**
```sql
Start
End
This timeout is 0 seconds long
```

**Explanation**
1. `console.log("Start");` is added to the stack, and immedietly executed
2. `setTimeout(() => ...)` is added to the call stack, but not immedietly executed. It is passed along to the Web API's to free up the stack. After 0 millaseconds (the length of the time out) it is passed to the task queue (waiting for the event loop to put it onto the call stack.)
3. `console.log("End");` is added to the stack, and immedietly executed (freeing up the call stack).
4. The event loop sees the empty call stack, and passes the call back of the setTimeout, `console.log("This timeout is 0 seconds long")`, onto the stack where it gets executed

## Conclusion 
The event loop is important for Javascripts ability to manage and execute asynchronous operations effeciently, without blocking or freezing your application. Understanding the event loop helps create improved UI's with improved performance, overall creating better web applications. 


**Helpful Resource**

<iframe width="100%" height="315" src="https://www.youtube.com/embed/8aGhZQkoFbQ?si=rZcYD2oyTV_bMNBS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
