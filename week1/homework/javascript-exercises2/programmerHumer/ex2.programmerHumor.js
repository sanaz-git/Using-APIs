// Exercise 2: Programmer humor
// Write a function that makes a HTTP Request to https://xkcd.now.sh/?comic=latest
// Inside the same file write two programs: one with XMLHttpRequest, and the other with axios
// Each function should make a HTTP Request to the given endpoint: https://xkcd.now.sh/?comic=latest
// Log the received data to the console
// Render the img property into an <img> tag in the DOM
// Incorporate error handling: log to the console the error message


const url = "https://xkcd.now.sh/?comic=latest";

//XMLHttpRequest
function requestWithXHR(url) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            const response = JSON.parse(xhr.response);
            console.log(response)
            const imgEl1 = document.getElementById("imagexhr");
            imgEl1.src = response.img;
        }
        xhr.onerror = function() {
            if (xhr.status != 200) {
                console.log(`Error ${xhr.status}: ${xhr.statusText}`);
            }
        };
    };
}


// axios
function requestWithAxios(url) {

    axios
        .get(url)
        .then(response => {
            console.log(response);
            const imgEl2 = document.getElementById("imageaxios");
            imgEl2.src = response.data.img;
        })

    .catch((error) => console.log(`error : ${error}`));
}


requestWithXHR(url)
requestWithAxios(url)