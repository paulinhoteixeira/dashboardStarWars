const countPeople = document.getElementById("personagens");
const countMoons = document.getElementById("luas");
const countPlanets = document.getElementById("planetas");
const countStarships = document.getElementById("naves");

fillCount();
fillTable();

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

async function fillTable(){
  const response = await swapiGet("films/");
  const tableData = response.data.results;
  console.log(tableData);

  let contentTable = ``

  for(let i=0; i<tableData.length; i++){
    contentTable = contentTable + `<tr>
    <td>${tableData[i].title}</td>
    <td>${moment(tableData[i].release_date).format("DD/MM/YYYY")}</td>
    <td>${tableData[i].director}</td>
    <td>${tableData[i].episode_id}</td>
    </tr>`    
  }
  console.log(contentTable)
  document.getElementById("tbody")
  .innerHTML = contentTable
}