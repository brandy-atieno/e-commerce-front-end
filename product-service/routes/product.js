const productRouter = require('express').Router();

const { createProduct, updateProduct, viewProducts, getProduct, deleteProduct } = require('../controllers/productController')

productRouter.post('/createProduct', createProduct)

productRouter.put('/updateProduct', updateProduct)

productRouter.get('/product/:product_name', getProduct)

productRouter.get('/viewProduct', viewProducts)

module.exports = { productRouter };