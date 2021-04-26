const menu_icon = document.querySelector(".menu-icon");
const top_line = document.querySelector(".top-line");
const bottom_line = document.querySelector(".bottom-line");
const menu_links = document.querySelector(".menu-links");
const links = document.querySelectorAll(".link");

menu_icon.addEventListener("click", animate);

links.forEach((link) => {
  link.addEventListener("click", animate);
});

function animate() {
  if (menu_icon.matches(".active")) {
    menu_icon.classList.remove("active");

    top_line.classList.remove("to-top");
    bottom_line.classList.remove("to-bottom");

    top_line.classList.add("close-top");
    bottom_line.classList.add("close-bottom");

    menu_links.classList.add("fade-out");
    menu_links.classList.remove("fade-in");
  } else {
    top_line.classList.remove("close-top");
    bottom_line.classList.remove("close-bottom");

    menu_icon.classList.add("active");
    top_line.classList.add("to-top");
    bottom_line.classList.add("to-bottom");

    menu_links.classList.remove("fade-out");
    menu_links.classList.add("fade-in");
  }
}
