// Exercise 3: Dog photo gallery

// Let's make a randomized dog photo gallery!

// Write a function that makes a HTTP Request to https://dog.ceo/api/breeds/image/random. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

// Create an index.html file that will display your random image
// Add 2 <button> and 1 <ul> element, either in the HTML or through JavaScript
// Write two versions for the button functionality: one with XMLHttpRequest, and the other with axios
// When any one of the 2 buttons is clicked it should make a HTTP Request to https://dog.ceo/api/breeds/image/random
// After receiving the data, append to the <ul> a <li> that contains an <img> element with the dog image
// Incorporate error handling: log to the console the error message

document.body.setAttribute(
  'style',
  'background:#5A69DA; width: 90%; text-align : center; margin: auto; font-family: zen loop, cursive; justify-content: center; ',
);

const url = 'https://dog.ceo/api/breeds/image/random';
const select1 = document.getElementById('btn1');
const select2 = document.getElementById('btn2');
const ulEl = document.createElement('ulEl');
const imgSize = '220px';
ulEl.style.display = 'flex';
ulEl.style.flexWrap = 'wrap';
ulEl.style.justifyContent = 'center';
ulEl.style.margin = 'auto';

//XMlHttpRequest

select1.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      const response = JSON.parse(xhr.response);
      console.log(response);
      const liEl = document.createElement('li');
      const imgEl = document.createElement('img');
      document.body.appendChild(ulEl);
      imgEl.src = `${response.message}`;
      imgEl.style.height = imgSize;
      imgEl.style.width = imgSize;
      imgEl.style.margin = '10px 5px 5px 10px';
      imgEl.style.borderRadius = '20px';
      liEl.style.listStyle = 'none';
      liEl.appendChild(imgEl);
      ulEl.appendChild(liEl);
    }
    xhr.onerror = function () {
      if (xhr.status != 200) {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
      }
    };
  };
});

// Axios
select2.addEventListener('click', () => {
  axios
    .get(url)
    .then((response) => {
      console.log(response);
      document.body.appendChild(ulEl);
      const liEl = document.createElement('li');
      const imgEl = document.createElement('img');
      imgEl.src = response.data.message;
      imgEl.style.height = imgSize;
      imgEl.style.width = imgSize;
      imgEl.style.margin = '10px 5px 5px 10px';
      imgEl.style.borderRadius = '20px';
      liEl.style.listStyle = 'none';
      liEl.appendChild(imgEl);
      ulEl.appendChild(liEl);
    })

    .catch((error) => console.log(`error : ${error}`));
});
