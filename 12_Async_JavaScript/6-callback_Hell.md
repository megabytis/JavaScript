Basic callback 👇

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => console.log(data));
```

Call-back Hell a.k.a. "Pyramid of Doom" 👇

```js
getUser(id, function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0].id, function (comments) {
      sendNotification(comments, function (response) {
        console.log("Done!");
      });
    });
  });
});
```

solution of CALLBACK-HELL :-

1. modularization
   Split logic into separate functions instead of nesting.

2. Promises
   Replace nested callbacks with .then() chaining.

3. Async/Await (modern & clean) 💫
    