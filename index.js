require('dotenv').config();
const express = require('express');
const productsController = require('./controllers/productsController');
const productIdController = require('./controllers/productIdController');
const salesController = require('./controllers/salesController');
const saleIdController = require('./controllers/saleIdController');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAll);
app.get('/products/:id', productIdController.getById);

app.get('/sales', salesController.getAll);
app.get('/sales/:id', saleIdController.getById);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
