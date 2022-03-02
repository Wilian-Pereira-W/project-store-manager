const { expect } = require('chai');
const sinon = require('sinon');

const salesServices = require('../../../services/salesServices');
const salesModel = require('../../../models/salesModel');


describe('Busca todos dos produtos do banco de dados', () => {
  describe('Quando não existe nenhum produto', () => {
    before(() => {
      const execute = [];
      sinon.stub(salesModel, 'getAll').resolves(execute);
    });

    after(() =>{
      salesModel.getAll.restore();
    });

    it('Retorna um array', async () => {
      const result = await salesServices.getAll();
      expect(result).to.be.an('array');
    });
    it('Retorna um array vazio', async () => {
      const result = await salesServices.getAll();
      expect(result).to.be.empty;
    });
  });

  describe('Quando existe produto', () => {
    before(() => {
      const execute = [
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:29.000Z",
          "productId": 1,
          "quantity": 2
        },
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:54.000Z",
          "productId": 2,
          "quantity": 2
        }
      ];
      sinon.stub(salesModel, 'getAll').resolves(execute);
    });

    after(() =>{
      salesModel.getAll.restore();
    });
    it('Retorna um array', async () => {
      const result = await salesServices.getAll();
      expect(result).to.be.an('array');
    });
    it('O array não estar vazio', async () => {
      const result = await salesServices.getAll();
      expect(result).to.be.not.empty;
    })
    it('O array possui itens do tipo objeto', async () => {
      const [item] = await salesServices.getAll();
      expect(item).to.be.an('object');
    })
    it('O item ter as propriedades "saleId", "date", "productId", "quantity"', async () => {
      const [item] = await salesServices.getAll();
      expect(item).to.include.all.keys('saleId', 'date', 'productId', 'quantity');
    })
  });
});