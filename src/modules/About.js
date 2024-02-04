function loadAbout() {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.style.padding = "4em";

  const aboutBtn = document.querySelector("#about-btn");

  const aboutUs = document.createElement("div");
  aboutUs.setAttribute("id", "about-us");

  aboutUs.innerText =
    "Welcome to Odin's Café, a mystical haven where the essence of Asgard meets the warmth of your local coffee house. Inspired by the grandeur of Odin's realm, our café is a tribute to the rich traditions and communal spirit of Asgard. 'We serve Asgard and all of its fellowmen' is our guiding principle, reflecting our commitment to providing exceptional service, quality beverages, and a welcoming atmosphere for all who enter our doors. At Odin's Café, every cup of coffee is brewed with the same dedication and honor that the guardians of Asgard show towards their land and people. Join us for a magical experience where myth and reality blend, creating a unique and enchanting escape from the ordinary.";

  aboutUs.style.marginTop = "2em";

  content.appendChild(aboutUs);

  const times = document.createElement("div");
  times.setAttribute("id", "times");

  times.innerText =
    "Opening Hours : All day, everyday - like the Asgardian Spirit!";

  times.style.marginTop = "2em";
  times.style.fontSize = "4em";

  setTimeout(() => {
    aboutUs.style.opacity = "1";
  }, 10);

  content.appendChild(times);

  setTimeout(() => {
    times.style.opacity = "1";
  }, 1000);

  aboutBtn.classList.add("not-allowed");
}

export default loadAbout;
