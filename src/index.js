const { readPlanest } = require('./utils/fsUtils');

const main = async () => {
  const planets = await readPlanest();
  console.log(planets);
}

main();