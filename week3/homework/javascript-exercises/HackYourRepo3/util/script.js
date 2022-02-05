import {addElements} from './addElements.js';
import {fetchData} from './fetchData';
import {populateSelect} from './populateSelect.js';
import {fetchContributions} from './fetchContributions.js';

window.addEventListener("load", main);

async function main() {
    const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

    const listData = await fetchData(url);
    console.log(listData)
  
    populateSelect(listData)
  
    selectBox.addEventListener('input', (e) =>{
    section3.innerHTML = '';
    let url2 ="";
  
    listData.forEach((element) => {
      if (element.name == e.target.value) {
  
        repository.textContent = element.name;
        description.textContent = element.description;
        forks.textContent = element.forks;
        updated.textContent = element.updated_at;
  
        const elements = addElements()
      
        url2 = element.contributors_url; 
        
      }
    });
    fetchContributions(url2)
  });
}