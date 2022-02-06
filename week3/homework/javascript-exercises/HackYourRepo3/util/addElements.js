export function addElements(){
//create header
const header = document.createElement('header');
const img = document.createElement('img');
img.src = 'hyf.png'
img.alt = 'hyf'
document.body.appendChild(header);
header.appendChild(img);

//create container class
const div1 = document.createElement('div');
div1.classList.add('container');
document.body.appendChild(div1);

//create section1
const section1 = document.createElement('section');
section1.classList.add('hyf');
div1.appendChild(section1);

const h1 = document.createElement('h1');
h1.textContent = 'HYF Repositories'
section1.appendChild(h1)

const selectBox = document.createElement('select');
selectBox.classList.add('selectClass')
section1.appendChild(selectBox)

const option = document.createElement('option');
selectBox.appendChild(option);
option.textContent = '-- Choose an Option --';


// create div2
const div2 = document.createElement('div')
div2.classList.add('card')
div2.style.display= 'none'
div1.appendChild(div2)

//create section2
const section2 = document.createElement('section');
section2.classList.add('repo');
div2.appendChild(section2);

// details of section2
const topic1 = document.createElement('h2');
topic1.textContent = 'repository: '
section2.appendChild(topic1);;
const repository = document.createElement('span')
topic1.appendChild(repository);

const topic2 = document.createElement('h2');
topic2.textContent = 'description: '
section2.appendChild(topic2);;
const description = document.createElement('span')
topic2.appendChild(description);

const topic3 = document.createElement('h2');
topic3.textContent = 'forks: '
section2.appendChild(topic3);;
const forks = document.createElement('span')
topic3.appendChild(forks);

const topic4 = document.createElement('h2');
topic4.textContent = 'updated: '
section2.appendChild(topic4);;
const updated = document.createElement('span')
topic4.appendChild(updated);

//create section3
const section3 = document.createElement('section');
section3.classList.add('contribution');
div2.appendChild(section3);

const topic5 = document.createElement('h2')
topic5.textContent = 'contributions'
topic5.setAttribute('style' , 'padding:10px; border:1px solid lightgray; text-align:center; font-size:20px; color:gray')
section3.appendChild(topic5)

//details of section3
const contDetails = document.createElement('div')
contDetails.setAttribute('style', 'display:flex; flex:right')
section3.appendChild(contDetails);

const img2 = document.createElement('img');

img2.setAttribute('style', 'position: relative; padding-top:5px; width: 20%; height: 20%; border-radius:50% ');
contDetails.appendChild(img2);

const contName = document.createElement('h2');

contName.setAttribute('style', 'width:150px; text-align:center; height:25px; margin-top:20px; margin-left:30px; border-style: groove; border-radius:10%')
contDetails.appendChild(contName);

const contNum = document.createElement('h2');

contNum.setAttribute('style', 'background: white; color: black; text-align: center; width: 30px; height:25px; margin-top:20px; border-style: groove; border-radius:10% ; margin-bottom: 10px; margin-left: 50px; margin-right:5px')
contDetails.appendChild(contNum);

return {selectBox}
}
