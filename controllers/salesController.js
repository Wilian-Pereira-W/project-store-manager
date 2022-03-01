const salesServices = require('../services/salesServices');

const getAll = async (_req, res, next) => {
  try {
    const sales = await salesServices.getAll();
    return res.status(200).json(sales);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const sale = await salesServices.getById(id);
    if (!sale.length) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

const addSales = async (req, res, next) => {
 const sales = req.body;
  try {
    const sale = await salesServices.addSales(sales);
    return res.status(201).json(sale);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, addSales };