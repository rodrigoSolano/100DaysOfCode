const textLoading = document.querySelector(".loading-text");
const background = document.querySelector(".image-bg");

window.addEventListener("load", function (event) {
      loadBlur(background, textLoading);
});

function loadBlur(background, textLoading) {
      let blur = 100;
      let counter = 0;
      let idInterval = setInterval(() => {
            if (blur === 0) {
                  textLoading.style.display = "none";
                  clearInterval(idInterval);
            }
            background.style.filter = `blur(${blur}px)`;
            textLoading.textContent = counter + "%";
            textLoading.style.opacity = counter / 1;
            blur--;
            counter++;
      }, 20);
}
