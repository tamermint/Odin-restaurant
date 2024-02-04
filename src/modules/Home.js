function loadHome() {
  const content = document.getElementById("content");
  const homebtn = document.getElementById("home-btn");

  const intro = document.createElement("div");
  intro.setAttribute("id", "intro-page");
  intro.innerText = "Welcome to Odin's Cafe!";
  //idea here is to make the intro text slowly transition into view

  content.appendChild(intro);

  setTimeout(() => {
    intro.style.opacity = "1";
  }, 10);

  homebtn.classList.add("not-allowed");
}
export default loadHome;
