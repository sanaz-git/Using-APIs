
export function populateSelect(listData, selectBox) {    
    listData.forEach (element => {
    const option = document.createElement('option');
    option.value = element.name;
    option.innerHTML = element.name;
    selectBox.appendChild(option);  
  });
  }