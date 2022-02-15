import { createButton } from './createButton.js';
import { fetchData } from './fetchData.js';

export async function fetchContributions(url2, section3) {
  try {
    const topic5 = document.createElement('h2')
    topic5.textContent = 'contributions'
    topic5.setAttribute('style', 'padding:10px; border:1px solid lightgray; text-align:center; font-size:20px; color:gray; margin-right:15px; margin-bottom:25px')
    section3.appendChild(topic5)

    const data = await fetchData(url2);
    console.log(data)

    const arrayNumber = data.length
    const pageNumber = Math.floor(arrayNumber / 5) + 1

    console.log(arrayNumber)
    console.log(pageNumber)

    const contDetails = document.createElement('div')
    contDetails.classList.add('contDetails')
    contDetails.setAttribute('style', 'display:flex  ; flex-direction:row; flex-wrap: wrap')
    section3.appendChild(contDetails);  
    
   createButton(pageNumber,section3,contDetails,data) 

  } catch (error) {
    console.log(error)
  }
}


