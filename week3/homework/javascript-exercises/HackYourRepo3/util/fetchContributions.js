import { fetchData } from './fetchData.js';


export async function fetchContributions(url2, section3) {
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


    const contDetails = document.createElement('div')
    contDetails.classList.add('contDetails')
    contDetails.setAttribute('style', 'display:flex  ; flex-direction:row; flex-wrap: wrap')
    section3.appendChild(contDetails);  

    function createButton(pageNumber) {
      for (let i = 1; i <= pageNumber; i++) {

        const buttons = document.createElement('button');
        buttons.innerText = i;
        buttons.classList.add('buttons')
        section3.appendChild(buttons)       

        buttons.addEventListener('click', (e) => {
          contDetails.innerHTML = ''
     
          const buttonsText = e.target.innerText

          const pageRange = (buttonsText * 5) - 5

          // console.log(buttonsText)
          // console.log(pageRange)

          const start = pageRange;
          const end = start + 5;

          // console.log(start)
          // console.log(end)

          let paginatedItems = data.slice(start, end);       

          paginatedItems.forEach(element => {        
            const img2 = document.createElement('img');
            img2.src = element.avatar_url;
            img2.setAttribute('style', 'position: relative; padding-top:5px; width: 20%; height: 20%; border-radius:50% ');
            contDetails.appendChild(img2);

            const contName = document.createElement('h2');
            contName.textContent = element.login;
            contName.setAttribute('style', 'width:150px; text-align:center; height:25px; margin-top:20px; margin-left:20px; border-style: groove; border-radius:10%')
            contDetails.appendChild(contName);

            const contNum = document.createElement('h2');
            contNum.textContent = element.contributions
            contNum.setAttribute('style', 'background: white; color: black; text-align: center; width: 30px; height:25px; margin-top:20px; border-style: groove; border-radius:10% ; margin-bottom: 10px; margin-left: 20px; margin-right:5px')
            contDetails.appendChild(contNum);

          });

        })
      }    
    }
    createButton(pageNumber)  

  } catch (error) {
    console.log(error)
  }
}


