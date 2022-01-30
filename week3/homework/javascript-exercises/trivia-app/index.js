window.addEventListener("load", main);

function main(){
  const url = "https://opentdb.com/api.php?amount=5";


    //create container
    const container = document.createElement('div');
    container.classList.add('cont');
    document.body.appendChild(container);

    //create section1
    const section1 = document.createElement('div');
    section1.classList.add('section1');
    container.appendChild(section1);

    const topic1 = document.createElement('h1');
    topic1.classList.add('topic1');
    topic1.textContent = 'Lets play some trivia'
    section1.appendChild(topic1)

    const topic2 = document.createElement('h2');
    topic2.classList.add('topic2');
    topic2.textContent = 'try your best to figure out the answer.If you really have no clue, click on the question to reveal the answer...';
    section1.appendChild(topic2);

    //create section2
    const section2 = document.createElement('div');
    section2.classList.add('section2');
    container.appendChild(section2);

    //create question
    const question = document.createElement('h1');
    question.classList.add('question');
    question.textContent = '????????????';
    section2.appendChild(question);

    //create answer 
    const answer = document.createElement('h1');
    answer.classList.add('answer');
    answer.textContent = '????????????';
    section2.appendChild(answer);







}


// function fetchData(url){
//   fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error=> console.log(error);
// }


async function fetchData(url){
  try{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
  }
  catch(error){
     console.log(error);
  }
}