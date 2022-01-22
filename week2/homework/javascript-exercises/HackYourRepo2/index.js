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

  const option = document.createElement('option');
  selectBox.appendChild(option);
  option.textContent = '-- Choose an Option --';


  //create div2
  // const div2 = document.createElement('div')
  // div2.classList.add('card')
  // div1.appendChild(div2)

  //create section2
  const section2 = document.createElement('section');
  section2.classList.add('repo');
  div1.appendChild(section2);

  // section2.style.display = 'none'

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
  div1.appendChild(section3);

  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

  const listData = await fetchData(url);
  console.log(listData)

  populateSelect(listData)

  selectBox.addEventListener('input', (e) =>{
  
 listData.forEach((element) => {
    if (element.name == e.target.value) {

      section2.style.display = 'block'

      repository.textContent = element.name;
      description.textContent = element.description;
      forks.textContent = element.forks;
      updated.textContent = element.updated_at;

      const url2 = element.contribution_url    

    }
  });
  fetchContributions(url2);
});

async function fetchContributions(url){
  try{
    const data = await fetchData(url);
    const topic5 = document.createElement('h2')
    topic5.textContent = 'contributions'
    section3.appendChild(topic5)


  } catch(error){
    console.log(error)
  }
}


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

// const topic2 = document.createElement('h2');
      // topic2.textContent = 'contribution';
      // section3.appendChild(topic2);