window.addEventListener("load", main);

async function main() {
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

  const repository = document.createElement('repository')
  repository.textContent = ''
  section2.appendChild(repository)

  const description = document.createElement('description')
  description.textContent = ''
  section2.appendChild(description)

  const forks = document.createElement('forks')
  forks.textContent = ''
  section2.appendChild(forks)

  const updated = document.createElement('updated')
  updated.textContent = ''
  section2.appendChild(updated)


  //create section3
  const section3 = document.createElement('section');
  section3.classList.add('contribution');
  div1.appendChild(section3);

  const topic2 = document.createElement('h2');
  topic2.textContent = 'contribution'
  section3.appendChild(topic2)

  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

  const listData = await fetchData(url);
  console.log(listData)

  populateSelect(listData)

selectBox.addEventListener('input', (e) =>{
  console.log(e)

 
} )







  function populateSelect(listData) {
     
    listData.forEach (element => {
      const option = document.createElement('option');
      option.value = element.name;
      option.innerHTML = element.name;
      selectBox.appendChild(option);  
    });
  }
  }

   

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
}

