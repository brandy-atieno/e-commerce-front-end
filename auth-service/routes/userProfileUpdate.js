const router = require('express').Router();
const { updateUserProfile } = require('../controllers/userProfileUpdateController')

router.post('/:id', updateUserProfile)
module.exports = { router };