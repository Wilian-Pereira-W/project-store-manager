const { expect } = require('chai');
const sinon = require('sinon');

const productsController = require('../../../controllers/productsController');
const productsServices = require('../../../services/productsServices');

describe('Busca todos dos produtos do banco de dados', () => {
  describe('Quando não existe nenhum produto', () => {
    const response = {};
    const request = {};
    before(() => {
      const execute =  [];
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns()

      sinon.stub(productsServices, 'getAll').resolves(execute);
    });

    after(() =>{
      productsServices.getAll.restore();
    });

    it('Retorna status 200', async () => {
      await productsController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('Retorna um array', async () => {
      await productsController.getAll(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe('Quando existe produto', () => {
    const response = {};
    const request = {};
    before(() => {
      const execute =   [[
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
      ]];
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns()
      sinon.stub(productsServices, 'getAll').resolves(execute);
    });

    after(() =>{
      productsServices.getAll.restore();
    });
    it('Retorna status 200', async () => {
      await productsController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('É chamado o método "json" passando um array', async () => {
      await productsController.getAll(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});