const updateRouter = require('express').Router();
const { updateUserProfile } = require('../controllers/userProfileUpdateController')
const userAuth = require('../middlewares/authMiddleware')
router.post('/:id', updateUserProfile)
module.exports = { router };