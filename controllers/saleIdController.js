const salesServices = require('../services/salesServices');

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

module.exports = { getById };