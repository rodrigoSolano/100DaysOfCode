const addCardImageToHTML = (imagesURLs) => {
  imagesURLs.forEach((url) => {
    let card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `                    
      <div class="col">
        <div class="card shadow-sm">

            <img src="${url}" alt="">

            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                </div>
            </div>

        </div>
      </div>
      `;
    console.log(url);
    document.querySelector(".container .row ").appendChild(card);
  });
};

let getURLsImages = async (page) => {
  const key = "13032000-addae7e4e8027c6f86dbeb627";
  const search_term = "music";
  const image_type = "music";
  const per_page = 10;

  const url = `https://pixabay.com/api/?key=${key}&q=${search_term}&image_type=${image_type}&page=${page}&per_page=${per_page}`;
  console.log(url);
  let imagesURLs = [];
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  resultado.hits.forEach((element) => {
    imagesURLs.push(element.webformatURL);
  });
  return imagesURLs;
};

//Observer
let page = 1;
let options = {
  root: null,
  rootMargin: "100px",
  threshold: 1.0,
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    getURLsImages(page).then((urlsImages) => addCardImageToHTML(urlsImages));
    page++;
  });
}, options);

const target = document.querySelector(".footer");
observer.observe(target);
