require('dotenv').config();
const express = require('express');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const { 
  validateNameProducts, 
  validateQuantityProducts, 
  validateProductsIdSales,
  validateQuantitySales,
 } = require('./middlewares');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAll);
app.get('/products/:id', productsController.getById);

app.post('/products', 
validateNameProducts, 
validateQuantityProducts,
productsController.addProduct);

app.put('/products/:id', 
validateNameProducts, 
validateQuantityProducts, 
productsController.updateProduct);

app.get('/sales', salesController.getAll);
app.get('/sales/:id', salesController.getById);

app.post('/sales', validateProductsIdSales, validateQuantitySales);
app.put('/sales/:id', validateProductsIdSales, validateQuantitySales);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
