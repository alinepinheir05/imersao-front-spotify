const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const gridContainer = document.querySelector(".grid-container");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  gridContainer.innerHTML=''
  results.forEach((element) => {
    gridContainer.innerHTML += `
    <div class="artist-card" id="">
    <div class="card-img">
      <img src="${element.urlImg}" id="artist-img" class="artist-img" />
      <div class="play">
        <span class="fa fa-solid fa-play"></span>
      </div>
    </div>
    <div class="card-text">
      <a title="Foo Fighters" class="vst" href=""></a>
      <span class="artist-name" id="artist-name">${element.name}</span>
      <span class="artist-categorie">Artista</span>
      </a>
    </div>
  </div>
    `;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
    playlistContainer.classList.add("hidden");
  }
  
  document.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
      playlistContainer.classList.add("hidden");
      resultArtist.classList.remove("hidden");
      return;
    }
    requestApi(searchTerm);
  });