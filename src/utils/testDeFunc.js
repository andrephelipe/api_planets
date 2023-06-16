const lanche = ['pao', 'tomate', 'queijo', 'alface', 'pao'];

const marmita = lanche.reduce((atual, corrente) => {
  if (corrente === 'tomates') {
    return [...atual, 'mortadela'];
  } 
    return [...atual, corrente];
}, []);

console.log(marmita);