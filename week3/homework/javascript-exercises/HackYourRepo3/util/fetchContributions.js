import {fetchData} from './fetchData.js';

export async function fetchContributions(url2,img2,contNum,contName,div2){
    try{
      const data = await fetchData(url2);
      console.log(data)
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
  