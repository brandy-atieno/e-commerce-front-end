const { user } = require('../config/config');
const mssql = require('mssql')
const bcrypt=require("bcryptjs")
const poolPromise = require('../config/poolPromise')

module.exports = {
    updateUserProfile: async(req, res) => {

        let { userID,user_name, email, password,} = req.body
        try {

            let pool = await poolPromise()
            const bcryptPassword = await bcrypt.hash(password, 10);
            pool.request()
            .input('userID', userID)
            .input('user_name', user_name)
                .input('email', email)
                .input('password', bcryptPassword)
                
                
                .execute('dbo.UserUpdate')


            .then(results => {
                
                if (results.rowsAffected) {
                    res.send("Profile successfuly updated!")
                    console.log("Profile  successfuly updated!!")
                }
            })
        } catch (err) {
            console.log(err.message)

        }
    }
}