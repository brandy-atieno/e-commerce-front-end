const  updateRouter= require('express').Router();
const { updateUserProfile} = require('../controllers/userProfileUpdateController')
const userAuth=require('../middlewares/authMiddleware')

updateRouter.put('/:id',updateUserProfile)
module.exports =   updateRouter ;