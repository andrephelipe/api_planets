const chai = require('chai');
const chatHttp = require('chai-http');
const { app } = require('../../src/app');

const { expect } = chai;
chai.use(chatHttp);

describe('Testando a rota planets', function () {
  describe('Testando o metodo GET', function () {
    it('Testar se GET retorna o status 200 e a lista de planets', async function () {
      const response = await chai.request(app).get('/planets');
  
      const output = [{
        id: 3,
        nome: 'LUNATICOS',
        habitantes: 1,
      }, {
        id: 4,
        nome: 'anelzin de mel',
        habitantes: 11,
        corDoCeus: 'azul bebe',
      }, {
        id: 5,
        namePlanet: 'Asgard',
        habitantes: 8000,
        corDoCeu: 'lilas',
      }, {
        id: 6,
        nome: 'Rotuil',
        habitantes: 8000,
        corDoCeu: 75,
      }, {
        id: 8,
        nome: 'Phelipe',
        idade: 22,
        status: 'pobre',
        contaBancaria: 'zerada',
      }, {
        id: 9,
        nome: 'via galaticos',
        habitantes: 11000,
        corDoCeus: 'preto forte',
      }, {
        id: 10,
        nome: 'via galaticos',
        habitantes: 11000,
        corDoCeus: 'preto forte',
      }, {
        id: 11,
        nome: 'via galaticos',
        habitantes: 11000,
        corDoCeus: 'preto forte',
      }, {
        id: 12,
        nome: 'via galaticos',
        habitantes: 11000,
        corDoCeus: 'preto forte',
      }, {
        id: 13,
        nome: 'via galaticos',
        habitantes: 11000,
        corDoCeus: 'preto forte',
      }, {
        id: 14,
        nome: 'via galaticos',
        habitantes: 11000,
        corDoCeus: 'preto forte',
      }, {
        id: 15,
        nome: 'via galaticos',
        habitantes: 11000,
        corDoCeus: 'preto forte',
      }];
      
      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('planets');
      expect(response.body.planets).to.be.instanceof(Array);
      expect(response.body.planets).to.deep.equal(output);
    });
  });

  describe.only('Testa o metodo POST', function () {
    it('Testa os status e se as alteracoes estao corretas', async function () {
        const mockPlanets = {
          nome: 'Feras do jardim',
          habitantes: 650,
          corDoCeus: 'preto marinho',
          trofeus: '15',
        };

        const response = await chai.request(app).post('/planets').send(mockPlanets);
    
      expect(response.status).to.be.equal(201);
      expect(response.body).to.haveOwnProperty('planets');
      expect(response.body.planets).to.haveOwnProperty('id');
      expect(response.body.planets.nome).to.equal(mockPlanets.nome);
    });
  });
});
