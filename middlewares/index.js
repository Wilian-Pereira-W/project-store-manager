const serialize = require('./serialize');
const validateNameProducts = require('./validateNameProducts');
const validateQuantityProducts = require('./validateQuantityProducts');
const validateProductsIdSales = require('./validateProductsIdSales');
const validateQuantitySales = require('./validateQuantitySales');

module.exports = { 
  serialize, 
  validateNameProducts, 
  validateQuantityProducts, 
  validateProductsIdSales,
  validateQuantitySales };