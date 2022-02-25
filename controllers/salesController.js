const salesServices = require('../services/salesServices');

const getAll = async (_req, res, next) => {
  try {
    const sales = await salesServices.getAll();
    return res.status(200).json(sales);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };