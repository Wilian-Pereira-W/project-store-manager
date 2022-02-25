const productsServices = require('../services/productsServices');

const getAll = async (_req, res, next) => {
  try {
    const products = await productsServices.getAll();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };