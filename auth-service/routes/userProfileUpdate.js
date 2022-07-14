const router = require('express').Router();

const { userProfileUpdate } = require('../controllers/userProfileUpdateController')

router.post('userProfileUpdate', userProfileUpdate)

module.exports = { userProfileUpdate };