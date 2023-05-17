const fs = require('fs').promises;
const path = require('path');

const readPlanest = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../../data/planets.json'));
    const planets = JSON.parse(data)
    return planets
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`)
  }
}

module.exports = {
  readPlanest
};