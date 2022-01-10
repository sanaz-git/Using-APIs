// Complete the four functions provided in the starter `index.js` file:

// `fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
//   syntax in order to get the data from the public API. Errors (HTTP or network 
//   errors) should be logged to the console.

// `fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
//   public API and populate the `<select>` element in the DOM.

// `fetchImage`: Use `fetchData()` to fetch the selected image and update the 
//   `<img>` element in the DOM.

// `main`: The `main` function orchestrates the other functions. The `main` 
//   function should be executed when the window has finished loading.

// Use async/await and try/catch to handle promises.

// Try and avoid using global variables. As much as possible, try and use function 
// parameters and return values to pass data back and forth.


function main(){
  const url = 'https://pokeapi.co/api/v2/pokemon/';
// const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`


function fetchData(url) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('Data', data);
            return data
        })

    .catch(error => {
        console.log("err", error);
    })
}

//h1 element
const h1 = document.createElement('h1')
document.body.appendChild(h1)
h1.textContent = "Pokemon Images"

//buttons element
const btn1 = document.createElement('button')
document.body.appendChild(btn1)
// btn1.setAttribute('style', "padding=50px")
btn1.textContent = 'Get Pokemon'

//select element
const select = document.createElement('select')
document.body.appendChild(select)
select.textContent = 'Choose pokemon'

//image element
const img = document.createElement('img');
document.body.appendChild(img);



//When button is clicked
btn1.addEventListener('click', () => {
 fetchData(url)
})

// Add options to select
function addOptionsToSelect(){
  data.results.forEach(element => {
  const option = document.createElement('option')
  option.value = element.name;
  option.innerHTML = element.name;
  select.appendChild(option)
  });  
}

select.addEventListener('input', () => {
  data.results.forEach(element => {
    if(select.value == element.name){
       const imgURL = element.url;
        fetch(imgURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
           img.src = data.sprites.back_default;
            document.body.appendChild(img);
        })

    .catch(error => {
        console.log("err", error);
    })
    }
  })

})
}

window.addEventListener('load', main);


