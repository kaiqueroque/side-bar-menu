
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function(){
  sidebar.classList.toggle("active");
}

searchBtn.onclick = function(){
  sidebar.classList.toggle("active");
}

let r = document.querySelector(':root');
let darkModebtn = document.querySelector(".btn_darkmode");

darkModebtn.onclick = function(){
  let background = getComputedStyle(r).getPropertyValue('--pageBGColor');
  let pageText = getComputedStyle(r).getPropertyValue('--pageTextColor');


  if(background == "#fff"){
    r.style.setProperty('--pageBGColor', '#1d1b31')
    r.style.setProperty('--pageTextColor', '#fff')
  }else{
    r.style.setProperty('--pageBGColor', '#fff')
    r.style.setProperty('--pageTextColor', '#11101d')
  }
}
