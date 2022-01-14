function main(){
  const HYF_REPOS_URL =
  'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

  const xhr = new XMLHttpRequest();
    xhr.open('GET', HYF_REPOS_URL, true)
    xhr.send();

    xhr.onload = function () {
      if (xhr.status != 200) {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
          const response = JSON.parse(xhr.response);
          console.log(response)} 
          
      xhr.onerror = function () {
          if (xhr.status != 200) {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`);
          }
      }; 
      
      // createAndAppend	:A utility function for easily creating and appending HTML elements.     

}}

main();

// Functionally, the application should do the following:
// 1.Make an API call to the endpoint: https://api.github.com/orgs/HackYourFuture/repos?per_page=100
// 2.Display the first 10 items in the HTML file (write JavaScript to add element to the DOM)
// 3.Show feedback when an error has happened

