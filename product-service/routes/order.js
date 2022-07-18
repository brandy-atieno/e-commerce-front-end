const orderRouter = require('express').Router();
const { createOrder } = require('../controllers/orderController')

orderRouter.post('/createOrder', createOrder)

module.exports = { orderRouter };