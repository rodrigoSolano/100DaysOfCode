const share_button = document.querySelector(".button__share");
const container_footer = document.querySelector(".preview-article__footer");
const share_popup = document.querySelector(".popup");

function tamVentana() {
  var tam = [0, 0];
  if (typeof window.innerWidth != "undefined") {
    tam = [window.innerWidth, window.innerHeight];
  } else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth != 0
  ) {
    tam = [
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ];
  } else {
    tam = [
      document.getElementsByTagName("body")[0].clientWidth,
      document.getElementsByTagName("body")[0].clientHeight,
    ];
  }
  return tam[0];
}

share_button.addEventListener("click", () => {
  if (tamVentana() > 900) {
    console.log(window.screen.width);
    share_popup.classList.toggle("none");
    share_popup.style.transition = "10s all ease";
    return;
  }

  if (container_footer.matches(".display")) {
    container_footer.classList.add("magictime", "slideRightReturn");

    document.querySelector(".autor__info").classList.remove("none");
    document.querySelector(".data").classList.remove("none");

    container_footer.classList.remove("none");
    document.querySelector(".share_options").classList.remove("none");
    document.querySelector(".button__share").classList.remove("none");

    container_footer.classList.remove("display");
    document.querySelector(".share_options").classList.remove("display");
    document.querySelector(".button__share").classList.remove("display");

    document.querySelector(".share_options").classList.add("none");
  } else {
    container_footer.classList.add("magictime", "slideRightReturn");

    document.querySelector(".autor__info").classList.add("none");
    document.querySelector(".data").classList.add("none");

    container_footer.classList.remove("none");
    document.querySelector(".share_options").classList.remove("none");
    document.querySelector(".button__share").classList.remove("none");

    container_footer.classList.add("display");
    document.querySelector(".share_options").classList.add("display");
    document.querySelector(".button__share").classList.add("display");
  }
});
