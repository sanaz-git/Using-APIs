// Exercise 1: Who do we have here?
// Write a function that makes a HTTP Request to https://www.randomuser.me/api
// Inside the JavaScript file write two functions: one with XMLHttpRequest, and the other with axios
// Each function should make a HTTP Request to the given endpoint: https://www.randomuser.me/api
// Log the received data to the console
// Incorporate error handling: log to the console the error message

let xhr = new XMLHttpRequest();
xhr.open('GET','https://www.randomuser.me/api'.true);
xhr.onreadystatechange = function(){
    if(xhr.readyState ===4 && xhr.status==200){
        let response =JSON.parse(xhr.response)
        console.log(response);
    }
}
xhr.onerror = function(){
    if(xhr.status != 200){
        console.log(`Error ${xhr.status}: ${xhr.statusText}`)
    }
}
xhr.send();