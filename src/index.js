const readline = require('readline-sync');
const { writeNewPlanet } = require('./utils/fsUtils');

const main = async () => {
  // writeNewPlanet({
  //     "id": 4,
  //     "nome": "Plutao",
  //     "habitantes": 19,
  //     "corDoCeu": "verde"
  // })

  const namePlanet = readline.question('Qual o nome do planeta? ');
  const habitantes = readline.questionInt('Quantos habitantes ha nesse planeta? ');
  const corDoCeu = readline.question('Qual a cor do ceu? ');

  const newPlanet = { namePlanet, habitantes, corDoCeu };
  writeNewPlanet(newPlanet);
  console.log('Novo planeta cadastrado com sucesso!');
};

main();