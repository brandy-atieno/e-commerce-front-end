const { user } = require('../config/config');
const mssql = require('mssql')
const poolPromise = require('../config/poolPromise')

module.exports = {
    userProfileUpdate: async(req, res) => {
        let { user_name, email, password } = req.body
        let pool = await poolPromise()
        pool.request()
            .input('user_name', user_name)
            .input('email', email)
            .input('password', password)
            .input('StatementType', 'Update')
            .execute('dbo.register_queries')

        .then(results => {
            if (results.rowsAffected) {
                res.send("Updated!")
                console.log("Updated!")
            }
        })

    }
}