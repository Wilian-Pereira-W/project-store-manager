const validateProductsIdSales = (req, res, next) => {
    const [sale] = req.body;
    if (!sale.productId) return res.status(400).json({ message: '"productId" is required' });
    next();
};

module.exports = validateProductsIdSales;