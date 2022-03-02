const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const salesModels = require('../../../models/salesModel');

describe('Busca todos dos sales do banco de dados', () => {
  describe('Quando não existe nenhum produto', () => {
    before(() => {
      const execute = [[]];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(() =>{
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await salesModels.getAll();
      expect(result).to.be.an('array');
    });
    it('Retorna um array vazio', async () => {
      const result = await salesModels.getAll();
      expect(result).to.be.empty;
    });
  });

  describe('Quando existe produto', () => {
    before(() => {
      const execute =   [[
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
      ]];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(() =>{
      connection.execute.restore();
    });
    it('Retorna um array', async () => {
      const result = await salesModels.getAll();
      expect(result).to.be.an('array');
    });
    it('O array não estar vazio', async () => {
      const result = await salesModels.getAll();
      expect(result).to.be.not.empty;
    })
    it('O array possui itens do tipo objeto', async () => {
      const [item] = await salesModels.getAll();
      expect(item).to.be.an('object');
    })
    it('O item ter as propriedades "saleId", "date", "productId", "quantity"', async () => {
      const [item] = await salesModels.getAll();
      expect(item).to.include.all.keys('saleId', 'date', 'productId', 'quantity');
    })
  });
});
