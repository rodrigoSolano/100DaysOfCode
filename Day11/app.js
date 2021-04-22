const btn_menu = document.querySelector(".left-menu-icon");

btn_menu.addEventListener("click", (e) => {
  const left_menu = document.querySelector("aside");

  if (left_menu.matches(".active")) {
    left_menu.style.left = "calc(-250px + 56px)";
    left_menu.classList.remove("active");
    btn_menu.innerHTML = "<i class='bx bx-menu'></i>";
    return;
  }

  left_menu.classList.add("active");
  left_menu.style.left = "0";
  btn_menu.innerHTML = "<i class='bx bx-x'></i>";
});
