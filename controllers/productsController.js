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

const addProduct = async (req, res, next) => {
  const { name, quantity } = req.body;
  try {
    const products = await productsServices.getAll();
    const product = await productsServices.addProduct(name, quantity);
    const isValidat = products.some((item) => item.name === name);
    if (isValidat) return res.status(409).json({ message: 'Product already exists' });
    return res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, addProduct };