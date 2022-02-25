const validateQuantitySales = (req, res, next) => {
  try {
   const [sales] = req.body;
    if (!sales.quantity) return res.status(400).json({ message: '"quantity" is required' });
            if (Number(sales.quantity) <= 0 || !Number.isInteger(sales.quantity)) { 
                return res.status(422).json(
                  { message: '"quantity" must be greater than or equal to 1' },
                    ); 
            }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateQuantitySales;