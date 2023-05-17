const { readPlanets, writeNewPlanet } = require('./utils/fsUtils');

const main = async () => {
  writeNewPlanet({
      "id": 4,
      "nome": "Plutao",
      "habitantes": 19,
      "corDoCeu": "verde"
  })
};

main();