const { user } = require('../config/config');
const mssql = require('mssql')
const bcrypt=require('bcryptjs')
const poolPromise = require('../config/poolPromise')

module.exports = {
    updateUserProfile: async(req, res) => {
         
            if (req.body.userId === req.params.id ) {
              if (req.body.password) {
                try {
                  const salt = await bcrypt.genSalt(10);
                  req.body.password = await bcrypt.hash(req.body.password, salt);
                } catch (err) {
                  return res.status(500).json(err);
                }
              }
              try {
                const user = await User.findByIdAndUpdate(req.params.id, {
                  $set: req.body,
                });
                res.status(200).json("Account has been updated");
              } catch (err) {
                return res.status(500).json(err);
              }
            } else {
              return res.status(403).json("You can update only your account!");
            }
          }
    //     let { id } = req.params.id
    //     let{user_name,email,password}=req.body
    //     let pool = await poolPromise()
    //     pool.request()
    //         .input('email', email)
    //         .input('StatementType', 'Update')
    //         .execute('dbo.')

    //     .then(results => {
    //         if (results.rowsAffected ) {
    //             res.send("Updated!")
    //             console.log("Updated!")
    //         }
    //     })

     }
