// Carga un sonido a través de su fuente y lo inyecta de manera oculta
const cargarSonido = function (fuente) {
  const sonido = document.createElement("audio");
  sonido.src = fuente;
  sonido.setAttribute("preload", "auto");
  sonido.setAttribute("controls", "none");
  sonido.style.display = "none"; // <-- oculto
  document.body.appendChild(sonido);
  return sonido;
};

const button_play = document.querySelector("button");
const board = document.querySelector(".board");
const board_sizes = ["2x2", "3x2", "5x2", "4x4", "5x4", "6x4", "7x4"];
const number_cards = 16;
const number_pairs = number_cards / 2;
const flip = cargarSonido("sounds/flip.mp3");
const correct = cargarSonido("sounds/correct.wav");
const error = cargarSonido("sounds/error.wav");
const win = cargarSonido("sounds/win.wav");
let id = 1;
let previous_flipped_card = null;

createBoard(number_cards, board_sizes);
let pairs_of_cards = createPairs(number_pairs);
addPairsToBoard(pairs_of_cards);

function createPairs(number_pairs) {
  let pairs = [];

  for (let i = 1; i <= number_pairs; i++) {
    let card = document.createElement("div");
    card.classList.add("flip-container");

    card.innerHTML = `
    <div class="card">
      <div class="front">
      </div>
      <div class="back">
        <img src="images/${i}.png" alt="">
      </div>
    </div>`;

    card_2 = card.cloneNode(true);

    card.id = id;
    card_2.id = id;

    card.addEventListener("click", handleCardFlipping);
    card_2.addEventListener("click", handleCardFlipping);

    pairs.push(card);
    pairs.push(card_2);

    id++;
  }

  return pairs;
}

function addPairsToBoard(pairs_of_cards) {
  shuffle(pairs_of_cards);

  pairs_of_cards.forEach((element) => {
    board.appendChild(element);
  });
}

function shuffle(a) {
  let j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function handleCardFlipping(e) {
  if (pairs_of_cards.length === 0) {
    win.play();
    button_play.style.display = "block";
    document.querySelector(".button-play").style.display = "flex";
    board.classList.add("none");
    document.querySelector(".board-container").classList.add("none");
    return;
  }

  let current_card = e.target;

  current_card.classList.add("active");
  current_card.style.pointerEvents = "none";

  flip.play();

  if (previous_flipped_card == null) {
    previous_flipped_card = current_card;
    return;
  } else {
    if (CardsAreSame(previous_flipped_card, current_card)) {
      current_card.classList.add("active");
      const interval = setTimeout(() => {
        correct.play();
        previous_flipped_card.style.pointerEvents = "none";
        current_card.style.pointerEvents = "none";
        previous_flipped_card = null;
        current_card = null;
        clearInterval(interval);
        pairs_of_cards.pop();
        pairs_of_cards.pop();
        console.log(pairs_of_cards);
        if (pairs_of_cards.length === 0) {
          const interval = setTimeout(() => {
            win.play();
            button_play.style.display = "block";
            document.querySelector(".button-play").style.display = "flex";
            board.classList.add("none");
            document.querySelector(".board-container").classList.add("none");
            clearInterval(interval);
          }, 500);
        }
      }, 500);
    } else {
      const interval = setTimeout(() => {
        previous_flipped_card.style.pointerEvents = "all";
        current_card.style.pointerEvents = "all";
        previous_flipped_card.classList.remove("active");

        current_card.classList.remove("active");

        error.play();

        clearInterval(interval);

        previous_flipped_card = null;
        current_card = null;
      }, 1000);
    }
  }
}

function createBoard(number_cards, board_sizes) {
  let number_rows = getNumberRows();
  let number_columns = getNumberColumns();

  let width_card = 750;
  let height_card = 750;

  let screen_width = tamVentana()[0];
  let screen_height = tamVentana()[1];

  let result = 0;

  if (screen_height > screen_width) {
    let temp = number_columns;
    number_columns = number_rows;
    number_rows = temp;
  }

  let total_width = number_columns * width_card + number_columns * 10;
  let total_height = number_rows * height_card + number_rows * 10;

  while (true) {
    total_width = number_columns * width_card + number_columns * 30;
    total_height = number_rows * height_card + number_rows * 30;

    if (total_width > screen_width) {
      width_card -= 1;
      continue;
    }
    if (total_height > screen_height) {
      height_card -= 1;
      continue;
    }

    if (width_card > height_card) {
      width_card -= 1;
    } else if (height_card > width_card) {
      height_card -= 1;
    } else {
      break;
    }
  }

  console.log(
    number_columns,
    number_rows,
    width_card,
    height_card,
    screen_width,
    screen_height
  );

  board.style = `grid-template-columns: repeat(${number_columns}, ${width_card}px);
  grid-template-rows: repeat(${number_rows}, ${height_card}px);
  grid-gap: 10px;`;
  console.log(board.style.gridTemplateColumns);
}

function getNumberColumns() {
  let number_columns = 0;
  board_sizes.forEach((board_size) => {
    result = parseInt(board_size[0]) * parseInt(board_size[2]);

    if (result === number_cards) {
      number_columns = parseInt(board_size[0]);
    }
  });

  return number_columns;
}

function getNumberRows() {
  let number_rows = 0;
  board_sizes.forEach((board_size) => {
    result = parseInt(board_size[0]) * parseInt(board_size[2]);

    if (result === number_cards) {
      number_rows = parseInt(board_size[2]);
    }
  });

  return number_rows;
}

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
  return tam;
}

function CardsAreSame(previous_card, current_card) {
  const previous_card_id = previous_card.id;
  const current_card_id = current_card.id;

  return previous_card_id === current_card_id;
}

button_play.addEventListener("click", () => {
  button_play.style.display = "none";
  document.querySelector(".button-play").style.display = "none";
  board.classList.remove("none");
  document.querySelector(".board-container").classList.remove("none");
});

/*
Crear u obtener el tablero
Definir el numero de tarjetas del tablero
Definir el numero de parejas del tablero
Crear las parejas del tablero
Agregar las parejas de tarjetas al tablero
Jugar
*/

/*
front image
back image
flip card
*/
