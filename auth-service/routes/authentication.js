const userRouter = require('express').Router();
const { register, login } = require('../controllers/authenticationController')

userRouter.post('/register', register)

userRouter.post('/login', login)


module.exports = userRouter;