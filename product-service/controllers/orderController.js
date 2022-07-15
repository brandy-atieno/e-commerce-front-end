const poolPromise = require('../config/poolPromise')

module.exports = {
    createOrder: async(req, res) => {
        let { user_id, product_id } = req.body
        try {
            let pool = await poolPromise()
            pool.request()

            .input('user_id', user_id)
                .input('product_id', product_id)
                .input('StatementType', 'Insert')
                .execute('dbo.product_queries')

            res.json({
                success: true,
                status: 200,
                message: "Order successful"
            })

            .then(results => {
                if (results.rowsAffected) {
                    res.send("Order Successful")
                    console.log("Order Successful!")
                }
            })
        } catch (err) {
            console.log(err.message)
        }



    }
}