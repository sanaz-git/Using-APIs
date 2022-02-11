export async function fetchData(url) {
    try {    
      const response = await fetch(url);
      const data = await response.json();
      return data
    } catch (error) {
      const err = document.createElement('h2');
      err.setAttribute('style', 'background-color: rgb(216, 105, 127);width: 400px; height: 100px;padding: 15px;position: absolute;top: 50%;left: 50%;margin: -70px 0 0 -200px; color: white; font-family: "Space Mono", monospace; text-align: center ')
      err.textContent = `network request failed ! "${error.message}"`;
      document.body.appendChild(err);
    }
  }
  