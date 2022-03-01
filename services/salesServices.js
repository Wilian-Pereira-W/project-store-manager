const salesModel = require('../models/salesModel');

const getAll = async () => {
  const products = await salesModel.getAll();

  return products;
};

const getById = async (id) => {
  const product = await salesModel.getById(id);

  return product;
};

const addSales = async (sales) => {
  const sale = await salesModel.addSales(sales);
  return sale;
};

module.exports = { getAll, getById, addSales };