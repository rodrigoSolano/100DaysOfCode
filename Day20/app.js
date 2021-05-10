const counter = document.querySelector(".counter");
const button_pause = document.querySelector(".gg-play-pause");
const button_play = document.querySelector(".gg-play-button");

let i = 0;
let label_count = "";

let counter_id = startCounter();

button_pause.addEventListener("click", () => {
  button_pause.classList.toggle("none");
  button_play.classList.toggle("none");
  clearInterval(counter_id);
});

button_play.addEventListener("click", () => {
  button_pause.classList.toggle("none");
  button_play.classList.toggle("none");
  counter_id = startCounter();
});

function startCounter() {
  const interval_id = setInterval(() => {
    label_count = String(i);
    while (label_count.length < 4) {
      label_count = "0" + label_count;
    }
    counter.innerHTML = label_count;
    i++;
  }, 995);
  return interval_id;
}
