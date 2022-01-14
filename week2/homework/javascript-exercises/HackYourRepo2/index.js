const select = document.getElementById("select");
const repository = document.getElementById("repository");
const description = document.getElementById("Description");
const forks = document.getElementById("Forks");
const updated = document.getElementById("Updated");
const card = document.getElementById("card")

function main() {

  const placeholderRepos = [
    {
      name: 'SampleRepo1',
      description: 'This repository is meant to be a sample',
      forks: 5,
      updated: '2020-05-27 12:00:00',
    },
    {
      name: 'AndAnotherOne',
      description: 'Another sample repo! Can you believe it?',
      forks: 9,
      updated: '2020-05-27 12:00:00',
    },
    {
      name: 'HYF-Is-The-Best',
      description:
        "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
      forks: 130,
      updated: '2020-05-27 12:00:00',
    },
  ];

  for (let i = 0; i < select.clientHeight; i++) {
    if (select.value == placeholderRepos[i].name) {
      card.style.display = 'flex';
      repository.innerHTML = placeholderRepos[i].name;
      description.innerHTML = placeholderRepos[i].description;
      forks.innerHTML = placeholderRepos[i].forks;
      updated.innerHTML = placeholderRepos[i].updated;
    }

    select.addEventListener('click', main)
  }
}

main();


