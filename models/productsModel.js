const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection
  .execute('SELECT * FROM StoreManager.products ORDER BY id');
  return products;
}; 

const getById = async (id) => {
  const [product] = await connection
  .execute('SELECT * FROM StoreManager.products WHERE id = ?;', [id]);
  return product[0];
};

const addProduct = async (name, quantity) => {
  const [products] = await connection
  .execute('INSERT INTO StoreManager.products (name, quantity) VALUES (?,?);', [name, quantity]);
  return { id: products.insertId, name, quantity };
};

const updateProduct = async (id, name, quantity) => {
  const [product] = await connection
  .execute('UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?',
   [name, quantity, id]);
  return product;
};

const excludeProduct = async (id) => {
  const [product] = await connection
  .execute('DELETE FROM StoreManager.products WHERE id = ?', [id]);
  return product;
};

module.exports = { 
  getAll, 
  getById, 
  addProduct, 
  updateProduct,
  excludeProduct };