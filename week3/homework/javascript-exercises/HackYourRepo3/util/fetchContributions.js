import { fetchData } from './fetchData.js';


export async function fetchContributions(url2, section3,pagination) {
  try {
    const topic5 = document.createElement('h2')
    topic5.textContent = 'contributions'
    topic5.setAttribute('style', 'padding:10px; border:1px solid lightgray; text-align:center; font-size:20px; color:gray')
    section3.appendChild(topic5)

    const data = await fetchData(url2);
    console.log(data)

    const arrayNumber = data.length
    const pageNumber = Math.floor(arrayNumber / 5) + 1

    console.log(arrayNumber)
    console.log(pageNumber)

  
    function createButton(pageNumber) {
      for (let i = 1; i <= pageNumber; i++) {
        const buttons = document.createElement('button');
        buttons.innerText = i;
        buttons.classList.add('buttons')
        section3.appendChild(buttons)

        buttons.addEventListener('click', (e) => {
          const buttonsText = e.target.innerText 
          console.log(buttonsText)
        })
      
     }
    }
    createButton(pageNumber)
  


    // data.forEach(element => {

    //   const contDetails = document.createElement('div')
    //   contDetails.setAttribute('style', 'display:flex; flex:right')
    //   section3.appendChild(contDetails);

    //   const img2 = document.createElement('img');
    //   img2.setAttribute('style', 'position: relative; padding-top:5px; width: 20%; height: 20%; border-radius:50% ');
    //   contDetails.appendChild(img2);

    //   const contName = document.createElement('h2');
    //   contName.setAttribute('style', 'width:150px; text-align:center; height:25px; margin-top:20px; margin-left:30px; border-style: groove; border-radius:10%')
    //   contDetails.appendChild(contName);

    //   const contNum = document.createElement('h2');
    //   contNum.setAttribute('style', 'background: white; color: black; text-align: center; width: 30px; height:25px; margin-top:20px; border-style: groove; border-radius:10% ; margin-bottom: 10px; margin-left: 50px; margin-right:5px')
    //   contDetails.appendChild(contNum);

    //   img2.src = element.avatar_url;
    //   contName.textContent = element.login;
    //   contNum.textContent = element.contributions



    // })
  } catch (error) {
    console.log(error)
  }
}


