const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/userController')

router.post('/user', user_controller.user_create);

module.exports = router;