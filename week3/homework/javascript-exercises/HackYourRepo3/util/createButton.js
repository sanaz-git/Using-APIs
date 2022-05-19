export function createButton(pageNumber, section3, contDetails, data) {
  for (let i = 1; i <= pageNumber; i++) {
    const buttons = document.createElement('button');
    buttons.innerText = i;
    buttons.classList.add('buttons');
    section3.appendChild(buttons);

    buttons.addEventListener('click', (e) => {
      contDetails.innerHTML = '';

      //show page number we clock
      const buttonsText = e.target.innerText;

      const pageRange = buttonsText * 5 - 5;

      // console.log(buttonsText)
      // console.log(pageRange)

      const start = pageRange;
      const end = start + 5;

      // console.log(start)
      // console.log(end)

      let paginatedItems = data.slice(start, end);

      paginatedItems.forEach((element) => {
        const containsDiv = document.createElement('div');
        containsDiv.setAttribute(
          'style',
          'display:flex; flex:right; padding: 10px ',
        );
        containsDiv.style.padding = '10px';
        contDetails.appendChild(containsDiv);

        const img2 = document.createElement('img');
        img2.src = element.avatar_url;
        img2.setAttribute(
          'style',
          ' display:block , width: 50px; height: 50px; border-radius:50%',
        );
        containsDiv.appendChild(img2);

        const contName = document.createElement('h2');
        contName.textContent = element.login;
        contName.setAttribute(
          'style',
          'width:150px; text-align:center; height:25px; padding-bottom:5px; border-style: groove; border-radius:10%; margin-top:20px; margin-left:20px',
        );
        containsDiv.appendChild(contName);

        const contNum = document.createElement('h2');
        contNum.textContent = element.contributions;
        contNum.setAttribute(
          'style',
          'background: white; color: black; text-align: center; width: 30px; height:25px;padding-bottom:5px;border-style: groove; border-radius:10% ; margin-left: 40px; margin-right:10px;margin-top:20px ',
        );
        containsDiv.appendChild(contNum);
      });
    });
  }
}
