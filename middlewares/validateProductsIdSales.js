const validateProductsIdSales = (req, res, next) => {
  try {
    const [sale] = req.body;
    if (!sale.productId) return res.status(400).json({ message: '"productId" is required' });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateProductsIdSales;