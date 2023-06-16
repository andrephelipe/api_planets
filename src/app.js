const express = require('express');
const { readPlanets, writeNewPlanet, putUpdatePlanets, deletePlanets } = require('./utils/fsUtils');

const app = express();
app.use(express.json());

app.get('/planets', async (req, res) => {
  const planets = await readPlanets();

  return res.status(200).json({ planets });
});

app.post('/planets', async (req, res) => {
  const newPlanets = req.body;
  console.log(newPlanets);

  const newPlanetsWithId = await writeNewPlanet(newPlanets);
  return res.status(201).json({ planets: newPlanetsWithId });
});

app.put('/planets/:id', async (req, res) => {
  const { id } = req.params;
  const changes = { ...req.body };

  const updatePlanets = await putUpdatePlanets(Number(id), changes);
  return res.status(201).json({ updatePlanets });
});

app.delete('/planets/:id', async (req, res) => {
  const { id } = req.params;

  await deletePlanets(Number(id));
  return res.status(204).end();
});

module.exports = {
  app,
};