/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');
const agent = session(app);
const recipe = {
  name: 'Milanesa de Pollo', resume:'Pollo Empanizado'
};

describe('Recipe Routes', () => {

  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('It must return a code 200 when receiving the values of the mandatory fields', () =>
      agent.get('/recipes').expect(200)
    );
  });

  describe('GET /recipes/:id', () => {
    it('It should return a 400 error code when entering a wrong ID value', async () => {
      const res1 = await agent.get('/recipes/grongid');
      expect(res1.statusCode).to.equal(400);
    });
  })

  describe('POST /recipes', () => {  
    it('It must return a code 200 when receiving the values of the mandatory fields', async () => {
      const res1 = await agent.post('/recipes').send(
        {
          name: 'Pastelitos', 
          resume: 'Sobres de Masa de trigo relleno y frito', 
          hs:'25',
          steps:['amasar','estirar','rellenar','cortar','freir'],
          image:'https://static.arteinformado.com/resources/app/docs/evento/91/180991/14938298_1507795275903576_1048498858044424013_n.png',
          diets: ['whole 30']
        }
      );
      expect(res1.statusCode).to.equal(200);
    })  

    it('It must return a code 400 when receiving data values off array format', async () => {
      const res1 = await agent.post('/recipes').send(
        {
          name: 'Pastelitos', 
          resume: 'Sobres de Masa de trigo relleno y frito', 
          diets: 'whole 30'
        }
      );
      expect(res1.statusCode).to.equal(400);
    }) 

    it('It should return a 400 error code when not receiving the values of the required fields', async () => {
      const res2 = await agent.post('/recipes').send({name: 'Pastelitos'});
      expect(res2.statusCode).to.equal(400);
    });  
  });


});
