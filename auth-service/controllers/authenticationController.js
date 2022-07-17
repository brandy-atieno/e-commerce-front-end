const { user } = require('../config/config');
const mssql = require('mssql')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const poolPromise = require('../config/poolPromise')

module.exports = {
     register: async(req, res) => {
        let { user_name, first_name, last_name, email, password, isAdmin } = req.body
       try{
        let pool = await poolPromise()
        const bcryptPassword = await bcrypt.hash(password, 10);
        
        pool.request()

        .input('user_name', user_name)
            .input('first_name', first_name)
            .input('last_name', last_name)
            .input('email', email)
            .input('password', bcryptPassword)
            .input('isAdmin', isAdmin)
            .input('StatementType', 'Insert')
            .execute('dbo.register_queries')

        .then(results => {
            if (results.rowsAffected) {
                const token =jwt.sign({email:email,user_name:user_name},process.env.JWTKEY,{
                    expiresIn:"24h",})
              return  res.json({
                status:200,
                user:{email,user_name},
                message:" Successful Register",token
                })                
            }})}
            catch(error){
                  return res.json({
                    status: 404,
                    success: false,
                    message:error.message
                  })

            }
        },

    
     login:async(req, res) => {
        const { email, password } = req.body
        try{
        let pool = await poolPromise()
                 const selectQuery= await pool.query(`select * FROM users WHERE email='${email}'`)
           if(selectQuery.recordset.length>0){
                let user = selectQuery.recordset[0]
                let pass =  await bcrypt.compare(password,user.password)
                
                   if ( pass) {
                        const token = jwt.sign({ email: email ,password:password}, process.env.JWTKEY, {
                            expiresIn: "24h",
                          });
                        return res.status(200).json({
                            user:email,password,
                            success: true,
                            message: "Logged in successfully",token,
                        
                        })
                    }}
                    else {
                        return res.status(401).json({
                            message: "invalid email or password"
                            
                          });
                    }




                    
            }
                catch(error){
                    return res.status(500).json({
                        status: 500,
                        message: error.message,
                      });
            }
        }
    
    }