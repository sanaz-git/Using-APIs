// Exercise 1: Who do we have here?
// Write a function that makes a HTTP Request to https://www.randomuser.me/api
// Inside the JavaScript file write two functions: one with XMLHttpRequest, and the other with axios
// Each function should make a HTTP Request to the given endpoint: https://www.randomuser.me/api
// Log the received data to the console
// Incorporate error handling: log to the console the error message

//XMLHttpRequest
const url = "https://www.randomuser.me/api";

function requestWithXHR(url) {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.send();

    xhr.onload = function() {
        if (xhr.status == 200) {
            let response = JSON.parse(xhr.response);
            console.log(response.results[0].name.first);
        } else {
            console.log(`Error ${xhr.status}: ${xhr.response}`);
        }
    };

    xhr.onerror = function() {
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
    };
}

// axios
function requestWithAxios(url) {

    axios
        .get(url)
        .then((response) => console.log(response.data.results[0].name.first))
        .catch((error) => console.log(`error : ${error}`));
}

function fetchRequest(url) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
}

requestWithXHR(url);
requestWithAxios(url);
fetchRequest(url)