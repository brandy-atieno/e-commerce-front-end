const poolPromise = require('../config/poolPromise')
const { product } = require('../config/config')

module.exports = {
    createProduct: async(req, res) => {
        let { product_name, price, description } = req.body
        try {
            let pool = await poolPromise()
            pool.request()

            .input('product_name', product_name)
                .input('price', price)
                .input('description', description)
                .input('StatementType', 'Insert')
                .execute('dbo.product_queries')

            .then(results => {
                if (results.rowsAffected) {
                    res.send("Product successfuly created!")
                    console.log("Product successfuly created!!")
                }
            })
        } catch (err) {
            console.log(err.message)

        }
    },

    updateProduct: async(req, res) => {
        let { product_name, price, description } = req.body
        try {
            let pool = await poolPromise()
            pool.request()

            .input('product_name', product_name)
                .input('price', price)
                .input('description', description)
                .input('StatementType', 'Update')
                .execute('dbo.product_queries')

            .then(results => {
                if (results.rowsAffected) {
                    res.send("Product successfuly updated!")
                    console.log("Product successfuly updated!!")
                }
            })
        } catch (err) {
            console.log(err.message)

        }
    },
    getProduct: async(req, res) => {
        let { product_name } = req.params

        try {
            let pool = await poolPromise()
            let result = pool.query(`select * from products where product_name='${product_name}'`).then(results => {
                console.log(results.recordset)
                res.json({
                    status: 200,
                    success: true,
                    message: "The product is: ",
                    results: results.recordset
                })
            })
        } catch (err) {
            console.log(err.message)

        }
    },
    viewProducts: async(req, res) => {

        try {
            let pool = await poolPromise()
            pool.query(`select * from products`).then(results => {
                console.log(results.recordset)
                res.json({
                    status: 200,
                    success: true,
                    message: "Products",
                    results: results.recordset
                })
            })
        } catch (err) {
            console.log(err.message)

        }
    },
    deleteProduct: async(req, res) => {

        let { product_name } = req.params

        try {
            let pool = await poolPromise()
                /*pool.query(`select * from products where product_name='${product_name}'`).then(results => {
                    console.log(results.recordset)
                    res.json({
                        status: 200,
                        success: true,
                        message: "The product is Deleted",
                        results: results.recordset
                    })
                })*/

            /* pool.request()

                 .emit('product_name', product_name)


                 .emit('StatementType', 'Delete')
                 .execute('dbo.product_queries')*/
        } catch (err) {
            console.log(err.message)

        }
    }
}