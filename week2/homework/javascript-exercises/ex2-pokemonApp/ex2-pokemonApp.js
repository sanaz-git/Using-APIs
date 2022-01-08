const url =" https://pokeapi.co/";

function fetchData(){
    fetch(url)
    .then(response =>{
       return response.json()  
    })
    .then(data =>{
        return data
    })
    .catch(error =>{
        console.log("err", error); 
    })
}

addEventListener('click', fetchAndPopulatePokemons)
function fetchAndPopulatePokemons(){
    const select = document.createElement('select')
    document.body.appendChild(select);
}


function fetchImage() {
    const img = createElement("img");
    img.src = data.img;
    document.body.appendChild(img);
  }


//   async function main(){
//     try {
//         const fetchedData = await fetch(url)
//         const parsedData = await fetchedData.json();
//         fetchImage(parsedData);
//     }

// catch(error){
//     console.log(error)
// }
// }

// window.addEventListener('load', main);  