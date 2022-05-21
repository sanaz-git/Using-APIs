export function createButton(pageNumber, section3, contDetails, data) {
  for (let i = 1; i <= pageNumber; i++) {
    const buttons = document.createElement('button');
    buttons.innerText = i;
    buttons.classList.add('buttons');
    section3.appendChild(buttons);

    buttons.addEventListener('click', (e) => {
      contDetails.innerHTML = '';

      //show page number we click
      const buttonsText = e.target.innerText;

      console.log(buttonsText);

      const pageRange = buttonsText * 5 - 5;

      const start = pageRange;
      const end = start + 5;

      console.log(start);
      console.log(end);

      let paginatedItems = data.slice(start, end);

      paginatedItems.forEach((element) => {
        const containsDiv = document.createElement('div');
        containsDiv.setAttribute('style', 'display:flex;  padding: 10px ');
        containsDiv.style.padding = '10px';
        contDetails.appendChild(containsDiv);

        const img2 = document.createElement('img');
        img2.src = element.avatar_url;
        img2.setAttribute(
          'style',
          ' display:block , padding-top:5px; width: 15%; height: 15%; border-radius:50%; margin-right:20px; margin-left:30px',
        );
        containsDiv.appendChild(img2);

        const contName = document.createElement('h2');
        contName.textContent = element.login;
        contName.setAttribute(
          'style',
          'width:140px; text-align:center; height:25px; padding-bottom:5px; border-style: groove; border-radius:10%; margin-top:10px; margin-left:10%',
        );
        containsDiv.appendChild(contName);

        const contNum = document.createElement('h2');
        contNum.textContent = element.contributions;
        contNum.setAttribute(
          'style',
          'background: white; color: black; text-align: center; width: 30px; height:25px;padding-bottom:5px;border-style: groove; border-radius:10% ; margin-left: 10%; margin-right:10px;margin-top:10px ',
        );
        containsDiv.appendChild(contNum);
      });
    });
  }
}
