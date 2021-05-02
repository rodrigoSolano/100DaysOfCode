const button_dismiss = document.querySelector(".error__dismiss");
const error_popup = document.querySelector(".error-popup");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    error_popup.classList.add("active");
  }, 2000);
});

button_dismiss.addEventListener("click", () => {
  error_popup.classList.add("contract");
});
