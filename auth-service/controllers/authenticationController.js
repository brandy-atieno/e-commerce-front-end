const { user } = require('../config/config');
const mssql = require('mssql')
const poolPromise = require('../config/poolPromise')

module.exports = {
    register: async(req, res) => {
        let { user_name, first_name, last_name, email, password, isAdmin } = req.body
        let pool = await poolPromise()
        pool.request()

        .input('user_name', user_name)
            .input('first_name', first_name)
            .input('last_name', last_name)
            .input('email', email)
            .input('password', password)
            .input('isAdmin', isAdmin)
            .input('StatementType', 'Insert')
            .execute('dbo.register_queries')

        .then(results => {
            if (results.rowsAffected) {
                res.send("Registered")
                console.log("Registered!")
            }
        })

    },
    login: async(req, res) => {
        const { email, password } = req.body
        let pool = await poolPromise()
        pool.query(`select * FROM users WHERE email='${email}'`)
            .then(results => {
                let user = results.recordset[0]
                if (user) {
                    let pass = user.password
                    if (password === pass) {
                        return res.json({
                            status: 200,
                            success: true,
                            message: "Logged in successfully",
                            results: user
                        })
                    }
                }
                res.status(404).json({
                    status: 404,
                    success: false,
                    message: "Couldn't login. Check your credentials",
                    results: {}
                })
            })
    }
}