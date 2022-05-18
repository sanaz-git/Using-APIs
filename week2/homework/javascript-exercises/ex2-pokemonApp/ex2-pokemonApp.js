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

window.addEventListener('load', main);

document.body.setAttribute(
  'style',
  'background-image: linear-gradient(to right, #fc5c7d, #6a82fb); text-align: center; margin-top: 5%; font-family: Arial, Helvetica, sans-serif',
);

function main() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';

  //h1 element
  const h1 = document.createElement('h1');
  document.body.appendChild(h1);
  h1.textContent = 'Pokemon Images';

  //buttons element
  const btn1 = document.createElement('button');
  document.body.appendChild(btn1);
  btn1.textContent = 'Get Pokemon';
  btn1.classList.add('btn1');

  //select element
  const select = document.createElement('select');
  const option = document.createElement('option');
  select.appendChild(option);
  document.body.appendChild(select);
  option.innerText = 'Choose Pokemon';
  select.classList.add('select');

  //image element
  const img = document.createElement('img');
  document.body.appendChild(img);
  img.setAttribute(
    'style',
    'display: block; width: 20%; margin-left: auto; margin-right: auto',
  );

  //When button is clicked
  btn1.addEventListener('click', fetchAndPopulatePokemon);

  // Add options to select
  async function fetchAndPopulatePokemon() {
    try {
      const data = await fetchData(url);
      data.results.forEach((element) => {
        const option = document.createElement('option');
        option.value = element.name;
        option.innerHTML = element.name;
        select.appendChild(option);
      });
      // get img
      select.addEventListener('input', async (e) => {
        let url2 = '';
        data.results.forEach((element) => {
          if (element.name == e.target.value) {
            url2 = element.url;
          }
        });
        fetchImage(url2);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchImage(url) {
    try {
      const data = await fetchData(url);
      img.src = data.sprites.front_default;
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
