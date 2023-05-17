const fs = require('fs').promises;
const path = require('path');
const PLANETS_DATA_PATH = '../../data/planets.json'

const readPlanets = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, PLANETS_DATA_PATH));
    const planets = JSON.parse(data)
    return planets
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`)
  }
};

const writeNewPlanet = async (newPlanets) => {
  try {
    const oldPlanets = await readPlanets()
    const allPlanets = JSON.stringify([...oldPlanets, newPlanets])

    await fs.writeFile(path.resolve(__dirname, PLANETS_DATA_PATH), allPlanets)

  } catch (error) {
    console.error(error)
  }
};

module.exports = {
  readPlanets,
  writeNewPlanet
};