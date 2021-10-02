const countPeople = document.getElementById("personagens");
const countMoons = document.getElementById("luas");
const countPlanets = document.getElementById("planetas");
const countStarships = document.getElementById("naves");

fillCount();

function fillCount() {
  // countPeople.innerHTML = swapiGet("people/").count;
  Promise.all([
    swapiGet("people/"),
    swapiGet("vehicles/"),
    swapiGet("planets/"),
    swapiGet("starships/"),
  ]).then(function (results) {
    countPeople.innerHTML = results[0].data.count;
    countMoons.innerHTML = results[1].data.count;
    countPlanets.innerHTML = results[2].data.count;
    countStarships.innerHTML = results[3].data.count;
  });
}

function swapiGet(param) {
  return axios.get(`https://swapi.dev/api/${param}`);
}
