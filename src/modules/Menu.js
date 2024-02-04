function loadMenu() {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.style.padding = "4em";

  const homebtn = document.querySelector("#home-btn");
  const aboutbtn = document.querySelector("#about-btn");

  homebtn.classList.remove("not-allowed");
  aboutbtn.classList.remove("not-allowed");

  const menuBtn = document.querySelector("#menu-btn");
  const menuImg = document.createElement("img");
  menuImg.src = "./assets/odin-menu.png";
  menuImg.alt = "odin-menu";

  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.textContent =
    "Reach out to the barkeep - Vesemir if you wish to serve gods";
  contact.style.marginTop = "2em";
  contact.style.fontSize = "4em";

  const cafeMenu = document.createElement("div");
  cafeMenu.setAttribute("id", "cafe-menu");
  cafeMenu.innerText = "Choose your divine drink drengr!";

  cafeMenu.appendChild(menuImg);

  content.appendChild(cafeMenu);

  setTimeout(() => {
    cafeMenu.style.opacity = "1";
  }, 10);

  content.appendChild(contact);

  setTimeout(() => {
    contact.style.opacity = "1";
  }, 1000);

  menuBtn.classList.add("not-allowed");
}
export default loadMenu;
