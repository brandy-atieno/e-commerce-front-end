const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

//const { router } = require('./routes/order')

const { productRouter } = require('./routes/product')

const { orderRouter } = require('./routes/order')

const bodyParser = require('body-parser');

const { request } = require('express');
const { createOrder } = require('./controllers/orderController');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT;

//app.use('/', router)

app.use('/product', productRouter)

app.use('/order', orderRouter)


app.use((err, req, res, next) => {
    res.json({
        status: err.status,
        success: false,
        message: err.message
    })
})


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})