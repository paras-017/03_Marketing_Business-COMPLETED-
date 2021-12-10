const nav = document.querySelector('.nav');
window.addEventListener('scroll', ()=>{
  nav.classList.add('scrolled')
})

var menu = document.getElementById("bar");
var items = document.getElementById("navbar");

items.style.right = "-400px";
menu.onclick = function() {
  if(items.style.right == "-400px"){
          items.style.right = "0";
  }
  else{
    items.style.right = "-400px"
  }
}