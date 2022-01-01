// Exercise 1: Who do we have here?
// Write a function that makes a HTTP Request to https://www.randomuser.me/api
// Inside the JavaScript file write two functions: one with XMLHttpRequest, and the other with axios
// Each function should make a HTTP Request to the given endpoint: https://www.randomuser.me/api
// Log the received data to the console
// Incorporate error handling: log to the console the error message

//XMLHttpRequest
const url = "https://www.randomuser.me/api";
function requestWithXHR(url) {

  const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.send();

  xhr.onload = function () {
    if (xhr.status == 200) {
      let response = JSON.parse(xhr.response);
      console.log(`server response :${response.results[0].gender}, ${response.results[0].name.title}
       ${response.results[0].name.first} ${response.results[0].name.last}, from ${response.results[0].location.country}.` );
    }else{
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  };

  xhr.onerror = function () {
    if (xhr.status != 200) {
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  };
}

//axios
function requestWithAxios(url) {
  const axios = require("axios");
  axios
    .get(url)
    .then((response) => console.log(`server response :${response.results[0].gender}, ${response.results[0].name.title}
    ${response.results[0].name.first} ${response.results[0].name.last}, from ${response.results[0].location.country}.`))
    .catch((error) => console.lpg(error));
}

requestWithXHR(url);
requestWithAxios(url);

