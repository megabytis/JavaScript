"use strict";

const request = new XMLHttpRequest();
request.open("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/hello");
request.send();

request.addEventListener("load", function () {
  const recievedData = JSON.parse(request.responseText);
  console.log(...recievedData);
});

/*
-> XMLHttpRequest is a browser-only API, so we need BROWSER for AJAX call, i.e. for sending request and getting response
  i.e. we can log it's result either in browser terminal or in webpage through DOM

-> in Node.js, XMLHttpRequest doesn't exist, node have it's alternative i.e. fetch()
*/
