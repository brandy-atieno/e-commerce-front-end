const { user } = require('../config/config');
const mssql = require('mssql')
const poolPromise = require('../config/poolPromise')

module.exports = {
    updateUserProfile: async(req, res) => {
        let { user_name, email,password,isAdmin } = req.body
        
        let pool = await poolPromise()
        pool.request()
        .input('user_name',user_name)
            .input('email', email)
            .input('password',password)
            .input('isAmin',isAdmin)
            .input('StatementType', 'Update')
            .execute('dbo.USERUpdate')

        .then(results => {
            if (results.rowsAffected && req.body.userId === req.params.id ) {
                res.send("Updated!")
                console.log("Updated!")
            }
        })

    }
}