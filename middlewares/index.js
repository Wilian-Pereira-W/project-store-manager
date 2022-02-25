const serialize = require('./serialize');
const serializeById = require('./serializeById');
const validateNameProducts = require('./validateNameProducts');
const validateQuantityProducts = require('./validateQuantityProducts');
const validateProductsIdSales = require('./validateProductsIdSales');
const validateQuantitySales = require('./validateQuantitySales');

module.exports = { 
  serialize, 
  serializeById, 
  validateNameProducts, 
  validateQuantityProducts, 
  validateProductsIdSales,
  validateQuantitySales };