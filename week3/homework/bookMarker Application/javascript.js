document.getElementById('list').onclick = function(){
  document.getElementById('container').style.transform='scale(1)'
}
document.getElementById('close').onclick = function(){
  document.getElementById('container').style.transform='scale(0)'
}

document.getElementById('form').addEventListener('submit',MemorizeMarkers)
function MemorizeMarkers(x){
  let Name = document.getElementById('WebsiteName').value
  let URL = document.getElementById('URL').value
  x.preventDefault()

  //check validation
  if(!Name && !URL){
    alert('please insert the name and the url')
    return false
  }else if(!Name){
    alert('please insert the name')
    return false
  }else if(!URL){
    alert('please insert URL')
    return false
  }else{
    showlight()
    setTimeout(hidelight,1000)

  }


  let Data={
    SiteName:Name,
    SiteURL:URL,
  }

  if(localStorage.getItem('storage')===null){
    let arr=[]
    arr.push(Data)
    let myjson = JSON.stringify(arr)
    localStorage.setItem('storage',myjson)
  }else{
    let get= JSON.parse(localStorage.getItem('storage'))
    get.push(Data)
    myjson = JSON.stringify(get)
    localStorage.setItem('storage',myjson)
  }
  //prevent reloading to see the result
  Display()
  document.getElementById('form').reset()


}

function Display(){
  let get= JSON.parse(localStorage.getItem('storage'))
  let result = document.getElementById('yourSites')
  result.innerHTML = ''
  for(let x=0;x<get.length;x++){
    result.innerHTML+='<div>'+get[x].SiteName+'<a href="'+get[x].SiteURL+'" target="_blank">'
    '<button onclick="Delete(\'"get[x].SiteName+"\')">Delete</button>'+'</div>'
    
  }

}

//function for the light

function hidelight(){
  document.getElementById('light').style.Display='none'

}

function Delete(i){
  let get= JSON.parse(localStorage.getItem('storage'))
  for(let x=0;x<get.length;x++){
    if(get[x].SiteName==i){
      get.splice(x,1)
    }

  }
  myjson=JSON.stringify(get)
  localStorage.setItem('storage',myjson)
  Display()
}