// Exercise 1: Programmer Fun
// Complete the function requestData() using fetch() to make a request to the url passed to it as an argument.
//  The function should return a promise. Make sure that the promise is rejected in case of HTTP or network errors.
// Notice that the function main() calls requestData(), passing it the url https://xkcd.now.sh/?comic=latest.
// Try and run the code in the browser and open the browser's console to inspect the data returned from the request.
// Next, complete the function renderImage() to render an image as an <img> element appended to the document's body,
// using the data returned from the API.
// Complete the function renderError() to render any errors as an <h1> element appended to the document's body.
// Refactor the main() function to use async/await.
// Test error handling, for instance, by temporarily changing the .sh in the url with .shx. There is no server at the modified url,
//  therefore this should result in a network (DNS) error.

const url = 'https://xkcd.now.sh/?comic=latest';

function requestData(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Data", data);
      return data;
    })
    .catch((error) => {
      console.log("err", error);
    });
}

function renderImage() {
  const img = createElement("img");
  img.src = data.img;
  document.body.appendChild(img);
}

function renderError() {
  const h1 = document.createElement("h1");
  h1.innerHTML =`Oops, something went wrong! "${error.message}"`;
  document.body.appendChild(h1);
}

async function main(){
    try {
        const fetchedData = await fetch(url)
        const parsedData = await fetchedData.json();
        renderImage(parsedData);
    }

catch(error){
    renderError(error)
}
}

window.addEventListener('load', main);