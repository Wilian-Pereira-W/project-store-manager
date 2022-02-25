const validateName = (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
            if (name.length < 5 || !typeof name === 'string') { 
                return res.status(422).json(
                  { message: '"name" length must be at least 5 characters long' },
                    ); 
            }
            next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateName;