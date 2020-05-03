// API Docs available at: https://api.got.show/doc/

const API = {
  SERVICE_URL: "https://api.got.show/api/",
  Characters: "book/characters",
  Battles: "show/battles",
  Continents: "book/continents",
  Cities: "show/cities",
  Castles: "show/castles"
}

let selectInfo = document.getElementById('info-type');

selectInfo.addEventListener('change', event => {
  let title = document.getElementById('title');
  title.textContent = event.target.value
  loadData(event.target.value)
});

function loadData(infoType) {
  let url = API.SERVICE_URL + API[infoType];
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      let list = document.getElementById('list')
      list.innerHTML = '';
      for (let element of json) {
        list.append(crearPersonaje(element.name));
      }
    });
}

function crearPersonaje(name) {
  let li = document.createElement('li');
  li.textContent = name;
  li.classList = 'list-group-item list-group-item-action';
  return li;
}