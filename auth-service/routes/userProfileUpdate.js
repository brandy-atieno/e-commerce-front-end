
const  updateRouter= require('express').Router();
const { updateUserProfile} = require('../controllers/userProfileUpdateController')
const userAuth=require('../middlewares/authMiddleware')


updateRouter.put('/updateProfile',updateUserProfile)
module.exports =   updateRouter ;

