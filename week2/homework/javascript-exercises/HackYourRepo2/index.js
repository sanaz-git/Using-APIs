//create header
const header = document.createElement('header');
const img = document.createElement('img');
img.src='hyf.png'
img.alt='hyf'
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

// I think here I must use fetch
const options = document.createElement('option')
// select.appendChild(options)

//create div2
// const div2 = document.createElement('div')
// div2.classList.add('card')
// div1.appendChild(div2)

//create section2
const section2 = document.createElement('section');
section2.classList.add('repo');
div1.appendChild(section2);

const topic1 = document.createElement('h2');
topic1.textContent = 'repository'
section2.appendChild(topic1)

// classes
// repository.classList.add('repository')
// description.classList.add('description')
// forks.classList.add('forks')
// updated.classList.add('updated')

//create section3
const section3 = document.createElement('section');
section3.classList.add('contribution');
div1.appendChild(section3);

const topic2 = document.createElement('h2');
topic2.textContent = 'contribution'
section3.appendChild(topic2)



