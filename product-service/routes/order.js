const router = require('express').Router();
const { createOrder } = require('../controllers/orderController')

router.post('/createOrder', createOrder)

module.exports = { router };