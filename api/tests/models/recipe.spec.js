const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe Model', () => {

  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Field Validation', () => {
    beforeEach(() => Recipe.sync({ force: false }));

    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Tequenos' });
      });
    });

    describe('resueme', () => {
      it('should throw an error if resume is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a resume')))
          .catch(() => done());
      });
    });

  });

});
