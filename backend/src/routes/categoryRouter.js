const express = require('express');
const router = express.Router();
const category_controller = require('../controllers/categoryController');
const checkJwt = require('../middleware/checkJwt');

router.post('/category', checkJwt, category_controller.category_create);
router.get('/category', category_controller.category_getall);
router.get('/category/:id', category_controller.category_getbyid);
router.put('/category/:id', category_controller.category_update);
router.delete('/category/:id', category_controller.category_delete);

module.exports = router;