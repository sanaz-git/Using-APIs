import { createButton } from './createButton.js';
import { fetchData } from './fetchData.js';

export async function fetchContributions(url2, section3) {
  try {
    const topic5 = document.createElement('h2');
    topic5.textContent = 'contributions';
    topic5.setAttribute(
      'style',
      'padding:10px; border:1px solid lightgray; text-align:center; font-size:20px; color:gray; margin-bottom:25px',
    );
    section3.appendChild(topic5);

    const data = await fetchData(url2);

    console.log(data);

    const arrayNumber = data.length;
    const pageNumber = Math.floor(arrayNumber / 5) + 1;

    console.log(arrayNumber);
    console.log(pageNumber);

    const contDetails = document.createElement('div');
    contDetails.classList.add('contDetails');
    contDetails.setAttribute('style', ' flex-direction:row; flex-wrap: wrap');
    section3.appendChild(contDetails);

    let firstPage = data.slice(0, 5);
    console.log(firstPage);

    firstPage.forEach((element) => {
      const containsDiv2 = document.createElement('div');
      containsDiv2.setAttribute('style', 'display:flex;  padding: 10px ');
      containsDiv2.style.padding = '10px';
      contDetails.appendChild(containsDiv2);

      const img3 = document.createElement('img');
      img3.src = element.avatar_url;
      img3.setAttribute(
        'style',
        ' display:block , padding-top:5px; width: 15%; height: 15%; border-radius:50%; margin-right:20px; margin-left:30px',
      );
      containsDiv2.appendChild(img3);

      const contName2 = document.createElement('h2');
      contName2.textContent = element.login;
      contName2.setAttribute(
        'style',
        'width:140px; font-size: 1.2vw; text-align:center; height:25px; padding-bottom:5px; border-style: groove; border-radius:10%; margin-top:10px; margin-left:10%',
      );
      containsDiv2.appendChild(contName2);

      const contNum2 = document.createElement('h2');
      contNum2.textContent = element.contributions;
      contNum2.setAttribute(
        'style',
        'background: white;font-size: 1.2vw; color: black; text-align: center; width: 30px; height:25px;padding-bottom:5px;border-style: groove; border-radius:10% ; margin-left: 10%; margin-right:10px;margin-top:10px ',
      );
      containsDiv2.appendChild(contNum2);
    });

    createButton(pageNumber, section3, contDetails, data);
  } catch (error) {
    console.log(error);
  }
}
