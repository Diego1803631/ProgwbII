const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/userController');
const checkJwt = require('../middleware/checkJwt');

router.post('/user', user_controller.user_create);
router.get('/user', checkJwt, user_controller.user_getall);
router.get('/user/:id', user_controller.user_getbyid);
router.put('/user/:id', user_controller.user_update);
router.delete('/user/:id', user_controller.user_delete);

module.exports = router;