const hamburgerIcon = document.getElementById("hamburger");
const closeButton = document.getElementById("close-button");
const sideBar = document.getElementById("sidebar");

hamburgerIcon.addEventListener("click", ()=>
  {
  sideBar.classList.toggle("translate-x-0");

  if
  (sideBar.classList.contains("translate-x-0")){
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-square-xmark");
  }
  else{
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-square-xmark");
  }

});
