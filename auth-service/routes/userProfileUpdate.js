const userProfileRouter = require('express').Router();
const { userProfileUpdate } = require('../controllers/userProfileUpdateController')

userProfileRouter.put('/userProfileUpdate', userProfileUpdate)
module.exports = { userProfileRouter };