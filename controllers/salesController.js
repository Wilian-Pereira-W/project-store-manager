const salesServices = require('../services/salesServices');

const getAll = async (_req, res, next) => {
  try {
    const products = await salesServices.getAll();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };