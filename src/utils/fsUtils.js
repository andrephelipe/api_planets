const fs = require('fs').promises;
const path = require('path');

const PLANETS_DATA_PATH = '../../data/planets.json';
console.log(PLANETS_DATA_PATH);

const readPlanets = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, PLANETS_DATA_PATH));
    const planets = JSON.parse(data);
    return planets;
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
};

const writeNewPlanet = async (newPlanets) => {
  try {
    const oldPlanets = await readPlanets();
    const lastId = oldPlanets.length > 0 ? oldPlanets[oldPlanets.length - 1].id : 0;
    const newPlanetsWithId = { id: lastId + 1, ...newPlanets };
    // lastId verifica o numero de itens no json e sempre faz -1 para criar um novo id
    const allPlanets = JSON.stringify([
      ...oldPlanets, 
      newPlanetsWithId,
    ]);

    await fs.writeFile(path.resolve(__dirname, PLANETS_DATA_PATH), allPlanets);
    // return { id: 44, nome: 'amjdbikod' };
    return newPlanetsWithId;
  } catch (error) {
    console.error(error);
  }
};

const putUpdatePlanets = async (id, changes) => {
  // const updatePlanet = { id, ...updatePlanetsData };
  // const updateReducerPlanets = oldPlanets.reduce((planetsList, currentPlantes) => {
  //   if (currentPlantes.id === updatePlanet.id) return [...planetsList, updatePlanet];
  //   return [...planetsList, currentPlantes];
  // }, []);
  
  try {
    const oldPlanets = await readPlanets();

    const planetSelected = oldPlanets.find((planet) => planet.id === id);
    if (!planetSelected) throw new Error('PLANETA NAO ENCONTRADO!');

    const keysPlanets = Object.keys(planetSelected).filter((key) => key !== 'id');
    keysPlanets.forEach((keys) => delete planetSelected[keys]);

    Object.assign(planetSelected, changes);

    const updateData = JSON.stringify(oldPlanets);

    await fs.writeFile(path.resolve(__dirname, PLANETS_DATA_PATH), updateData);
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
};

const deletePlanets = async (id) => {
  const planets = await readPlanets();
  const filterPlanets = planets.filter((planet) => planet.id !== id);

  const atualizar = JSON.stringify(filterPlanets);

  try {
    await fs.writeFile(path.resolve(__dirname, PLANETS_DATA_PATH), atualizar);
    console.log(`Atualizou planeta com o id ${id}`);
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
};

module.exports = {
  readPlanets,
  writeNewPlanet,
  putUpdatePlanets,
  deletePlanets,
};