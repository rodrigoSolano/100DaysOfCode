
const showFaqButton = document.querySelectorAll(".bxs-chevron-down");

showFaqButton.forEach((element) => {
  element.addEventListener("click", (e) => {
    const faq_content = e.target.parentNode.parentNode.childNodes[3];
    e.target.parentNode.parentNode.classList.toggle("active")
    if (!faq_content.classList.contains("active")) {
      faq_content.classList.add("active");
      faq_content.style.height = "auto";
      let height = faq_content.clientHeight + "px";
      faq_content.style.height = "0px";
      setTimeout(function () {
        faq_content.style.height = height;
      }, 0);
    } else {
      faq_content.style.height = "0px";
      faq_content.addEventListener(
        "transitionend",
        function () {
          faq_content.classList.remove("active");
        },
        {
          once: true,
        }
      );
    }

    if (element.matches(".bxs-chevron-down")) {
      element.classList = "bx bxs-x-circle";
      return;
    }
    element.classList = "bx bxs-chevron-down";
  });
});

