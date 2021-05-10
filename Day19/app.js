const frame = document.querySelector(".frame");
const circle = document.querySelector(".circle");
frame.addEventListener("mousemove", (e) => {
  circle.style.top = `${e.offsetY}px`;
  circle.style.left = `${e.offsetX}px`;
});
frame.addEventListener("mouseleave", (e) => {
  circle.style.top = "50%";
  circle.style.left = "50%";
});
