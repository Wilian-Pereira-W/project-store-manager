const connection = require('./connection');
const serialize = require('../middlewares/serialize');

const getAll = async () => {
  const SELECT = `SELECT saleProducts.sale_id, sale.date,  saleProducts.product_id, 
  saleProducts.quantity`;
  const FROM = 'FROM StoreManager.sales AS sale';
  const INNERJOIN = 'INNER JOIN StoreManager.sales_products AS saleProducts';
  const ON = 'ON sale.id = saleProducts.sale_id';
  const ORDERBY = 'ORDER BY saleProducts.sale_id, saleProducts.product_id'; 
  const [sales] = await connection
  .execute(`${SELECT} ${FROM} ${INNERJOIN} ${ON} ${ORDERBY}`);
  return sales.map(serialize.serialize);
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
  return sales.map(serialize.serializeById);
};

const addSales = async (sales) => {
  const [result] = await connection.execute('INSERT INTO StoreManager.sales (date) VALUE(now());');

  await sales.forEach(async (sale) => {
    await connection
      .execute(`INSERT INTO 
      StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?,?,?);`,
      [result.insertId, sale.productId, sale.quantity]); 
  });

  return {
    id: result.insertId,
    itemsSold: sales,
  };
};

module.exports = { getAll, getById, addSales };