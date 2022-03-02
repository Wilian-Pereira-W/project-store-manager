const { expect } = require('chai');
const sinon = require('sinon');

const productsServices = require('../../../services/productsServices');
const productsModel = require('../../../models/productsModel');


describe('Busca todos dos produtos do banco de dados', () => {
  describe('Quando não existe nenhum produto', () => {
    before(() => {
      const execute = [];
      sinon.stub(productsModel, 'getAll').resolves(execute);
    });

    after(() =>{
      productsModel.getAll.restore();
    });

    it('Retorna um array', async () => {
      const result = await productsServices.getAll();
      expect(result).to.be.an('array');
    });
    it('Retorna um array vazio', async () => {
      const result = await productsServices.getAll();
      expect(result).to.be.empty;
    });
  });

  describe('Quando existe produto', () => {
    before(() => {
      const execute =   [
        {
          "id": 1,
          "name": "produto A",
          "quantity": 10
        },
        {
          "id": 2,
          "name": "produto B",
          "quantity": 20
        }
      ];
      sinon.stub(productsModel, 'getAll').resolves(execute);
    });

    after(() =>{
      productsModel.getAll.restore();
    });
    it('Retorna um array', async () => {
      const result = await productsServices.getAll();
      expect(result).to.be.an('array');
    });
    it('O array não estar vazio', async () => {
      const result = await productsServices.getAll();
      expect(result).to.be.not.empty;
    })
    it('O array possui itens do tipo objeto', async () => {
      const [item] = await productsServices.getAll();
      expect(item).to.be.an('object');
    })
    it('O item ter as propriedades "id", "name", "quantity"', async () => {
      const [item] = await productsServices.getAll();
      expect(item).to.include.all.keys('id', 'name', 'quantity');
    })
  });
});