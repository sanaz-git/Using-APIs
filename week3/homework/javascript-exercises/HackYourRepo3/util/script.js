import { addElements } from './addElements.js';
import { fetchData } from './fetchData.js';
import { populateSelect } from './populateSelect.js';
import { fetchContributions } from './fetchContributions.js';

window.addEventListener("load", main);

async function main() {
  const { selectBox,section3,repository,description,forks,updated,img2,contNum,contName,contDetails,div2} = addElements()
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  console.log(selectBox,section3,repository,description,forks,updated)
  
  const listData = await fetchData(url);
  console.log(listData)

  populateSelect(listData, selectBox)


  selectBox.addEventListener('input', (e) => {
    section3.innerHTML = '';
    let url2 = "";

    listData.forEach((element) => {
      if (element.name == e.target.value) {
    
     
        repository.textContent = element.name;
        description.textContent = element.description;
        forks.textContent = element.forks;
        updated.textContent = element.updated_at;

        url2 = element.contributors_url;

      }
    });
    fetchContributions(url2,section3,img2,contNum,contName,contDetails,div2)
      div2.style.display = 'block'
  });
}