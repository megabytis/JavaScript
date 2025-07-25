###### Asynchronous Code in JavaScript

Asynchronous code allows your program to perform tasks without waiting for other tasks to finish.
Hence, it's is non-blocking – doesn't pause execution for tasks to finish.

🧵 How it works:

    JavaScript has a single thread of execution.

    Asynchronous tasks (e.g. image loading, API calls, timers etc...) are sent to the background.

    Once complete, they return and are executed via the event loop.

🧪 Code Example (Image Loading):

```js
const img = document.querySelector(".dog");
img.src = "dog.jpg";

img.addEventListener("load", function () {
  img.classList.add("fadeIn"); // Runs after image loads
});

p.style.width = "300px";
```

📌 Explanation:

    addEventListener('load', ...) sets a callback for when the image finishes loading.

    This is asynchronous behavior, triggered after the image loads.

**_NOTE:_**
addEventListener alone does not make code asynchronous—it's the event (e.g., image loading, API calling, timer running, DOMs etc...) that’s async.

✅ What actually makes code asynchronous:

    Asynchronous APIs(e.g. setTimeout(), fetch(), addEventListener(), etc...) provided by the browser (or Node.js):

        These APIs handle work in the background.

        Once done, they notify JavaScript through the event loop.

        Only then do callback functions run.
