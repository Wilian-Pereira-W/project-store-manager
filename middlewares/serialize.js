const serialize = (sale) => ({
  saleId: sale.sale_id,
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
});

const serializeById = (sale) => ({
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
});

module.exports = { serialize, serializeById };