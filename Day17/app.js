const rgb2hex = (rgb) => {
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
    .join("")}`;
};

const paintCanvas = () => {
  for (let i = 1; i <= 400; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("inactive");
    pixel.id = i;
    canvas.appendChild(pixel);
    pixel.addEventListener("click", changePixelColor);
    canvas_pixels.push(pixel);
  }
};

const changePixelColor = (e) => {
  const pixel = e.target;
  pixel.classList.toggle("inactive");
  pixel.classList.toggle("active");
  // pixel.style.backgroundColor = current_color;
};

function cleanCanvas() {
  canvas_pixels.forEach((pixel) => {
    pixel.classList.remove("active");
    pixel.classList.add("inactive");
    pixel.style.backgroundColor = original_color;
  });
}

function watchcolor_picker(event) {
  current_color = event.target.value;
}

// const show_pixels_drawing = () => {
//   let draw_pixels = canvas_pixels.filter(
//     (pixel) => pixel.style.backgroundColor != original_color
//   );

//   let draw_pixels_id = "";
//   draw_pixels.forEach((pixel) => (draw_pixels_id += pixel.id + ","));
//   console.log(draw_pixels_id);
// };

const canvas = document.querySelector(".canvas");
const canvas_pixels = [];
// const button_clean_canvas = document.querySelector(".btn-clean-canvas");
// const color_picker = document.querySelector("input");
// const button_show_pixels_drawing = document.querySelector(
//   ".btn-show-pixels-drawing"
// );

const alien = [
  130,
  131,
  149,
  150,
  151,
  152,
  168,
  169,
  170,
  171,
  172,
  173,
  187,
  188,
  190,
  191,
  193,
  194,
  207,
  208,
  209,
  210,
  211,
  212,
  213,
  214,
  229,
  232,
  248,
  250,
  251,
  253,
  267,
  269,
  272,
  274,
];

let current_color = "#ffffff";
let original_color = "rgb(222, 71, 56)";

paintCanvas();

// button_clean_canvas.addEventListener("click", cleanCanvas);
// color_picker.addEventListener("change", watchcolor_picker, false);
// button_show_pixels_drawing.addEventListener("click", show_pixels_drawing);

function paint(draw) {
  draw.forEach((id) => {
    canvas_pixels[id - 1].classList.remove("inactive");
    canvas_pixels[id - 1].classList.add("active");
  });
}

paint(alien);
