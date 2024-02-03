import "./styles.css";

//import other functions to retrieve content.

//On page load, attach the the event listeners to the buttons
function init() {
  const homeBtn = document.getElementById("home-btn");
  const aboutBtn = document.getElementById("about-btn");
  const menuBtn = document.getElementById("menu-btn");
}

//have a main function call all these functions
function main() {
  init();
  homeBtn.addEventListener("click", loadHome);
  aboutBtn.addEventListener("click", loadAbout);
  menuBtn.addEventListener("click", loadMenu);
}

document.onload(main());
