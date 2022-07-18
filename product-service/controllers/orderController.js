const { response } = require('express')
const poolPromise = require('../config/poolPromise')

module.exports = {
    createOrder: async(req, res) => {
        let { product_id, user_id, quantity } = req.body
        try {
            let pool = await poolPromise()
            pool.request()


            .input('product_id', product_id)
                .input('user_id', user_id)
                .input('quantity', quantity)
                .input('StatementType', 'Insert')
                .execute('dbo.order_queries')

            /* response.status(200).json({
                 success: true,
                 status: 200,
                 message: "Order successful"
             })*/

            .then(results => {
                if (results.rowsAffected) {
                    res.send("Order Successful!")
                    console.log("Order Successful!")
                }
            })
        } catch (err) {
            console.log(err.message)
        }



    }
}