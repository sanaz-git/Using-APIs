export function addElements() {
  //create header
  const header = document.createElement('header');
  const img = document.createElement('img');
  img.src = 'hyf.png';
  img.alt = 'hyf';
  document.body.appendChild(header);
  header.appendChild(img);

  // //create container class
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);

  //create section1
  const section1 = document.createElement('section');
  section1.classList.add('hyf');
  container.appendChild(section1);

  const h1 = document.createElement('h1');
  h1.textContent = 'HYF Repositories';
  section1.appendChild(h1);

  const selectBox = document.createElement('select');
  selectBox.classList.add('selectClass');
  section1.appendChild(selectBox);

  const option = document.createElement('option');
  selectBox.appendChild(option);
  option.textContent = '-- Choose an Option --';

  // create div2
  const div2 = document.createElement('div');
  div2.classList.add('card');
  div2.style.display = 'none';
  container.appendChild(div2);

  //create section2
  const section2 = document.createElement('section');
  section2.classList.add('repo');
  div2.appendChild(section2);

  // details of section2
  const topic1 = document.createElement('h2');
  topic1.textContent = 'repository: ';
  section2.appendChild(topic1);
  const repository = document.createElement('span');
  topic1.appendChild(repository);

  const topic2 = document.createElement('h2');
  topic2.textContent = 'description: ';
  section2.appendChild(topic2);
  const description = document.createElement('span');
  topic2.appendChild(description);

  const topic3 = document.createElement('h2');
  topic3.textContent = 'forks: ';
  section2.appendChild(topic3);
  const forks = document.createElement('span');
  topic3.appendChild(forks);

  const topic4 = document.createElement('h2');
  topic4.textContent = 'updated: ';
  section2.appendChild(topic4);
  const updated = document.createElement('span');
  topic4.appendChild(updated);

  //create section3
  const section3 = document.createElement('section');
  section3.classList.add('contribution');
  div2.appendChild(section3);

  return { selectBox, section3, repository, description, forks, updated, div2 };
}
