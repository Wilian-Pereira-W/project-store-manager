const productsServices = require('../services/productsServices');

const getAll = async (_req, res, next) => {
  try {
    const products = await productsServices.getAll();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await productsServices.getById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById };