const serializeById = (sale) => ({
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
});

module.exports = serializeById;