const productsModel = require('../models/productsModel');

const getAll = async () => {
  try {
    const products = await productsModel.getAll();

  return products;
  } catch (error) {
    return console.log(error);
  }
};

const getById = async (id) => {
  try {
    const product = await productsModel.getById(id);

    return product;
  } catch (error) {
    return console.log(error);
  }
};

const addProduct = async (name, quantity) => {
  try {
    const product = await productsModel.addProduct(name, quantity);
  return product;
  } catch (error) {
    return console.log(error);
  }
};

module.exports = { getAll, getById, addProduct };