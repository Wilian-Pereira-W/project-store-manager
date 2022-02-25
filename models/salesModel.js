const connection = require('./connection');
const { serialize, serializeById } = require('../middlewares');

const getAll = async () => {
  const SELECT = `SELECT saleProducts.sale_id, sale.date,  saleProducts.product_id, 
  saleProducts.quantity`;
  const FROM = 'FROM StoreManager.sales AS sale';
  const INNERJOIN = 'INNER JOIN StoreManager.sales_products AS saleProducts';
  const ON = 'ON sale.id = saleProducts.sale_id';
  const ORDERBY = 'ORDER BY saleProducts.sale_id, saleProducts.product_id'; 
  const [sales] = await connection
  .execute(`${SELECT} ${FROM} ${INNERJOIN} ${ON} ${ORDERBY}`);
  return sales.map(serialize);
}; 

const getById = async (id) => {
  const SELECT = `SELECT saleProducts.sale_id, sale.date,  saleProducts.product_id, 
  saleProducts.quantity`;
  const FROM = 'FROM StoreManager.sales AS sale';
  const INNERJOIN = 'INNER JOIN StoreManager.sales_products AS saleProducts';
  const ON = 'ON sale.id = saleProducts.sale_id';
  const WHERE = 'WHERE saleProducts.sale_id = ?';
  const ORDERBY = 'ORDER BY saleProducts.sale_id, saleProducts.product_id'; 
  const [sales] = await connection
  .execute(`${SELECT} ${FROM} ${INNERJOIN} ${ON} ${WHERE} ${ORDERBY}`, [id]);
  return sales.map(serializeById);
};

module.exports = { getAll, getById };