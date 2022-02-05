import {fetchData} from './fetchData.js';
import {addElements} from './addElements.js';

export async function fetchContributions(url2){
    try{
        const elements = addElements() 
      const data = await fetchData(url2);
      data.forEach(element => {
      img2.src = element.avatar_url;
      contName.textContent = element.login;
      contNum.textContent = element.contributions   
  
      div2.style.display= 'block' 
  
      
      })  
    } catch(error){
      console.log(error)
    }
  }
  