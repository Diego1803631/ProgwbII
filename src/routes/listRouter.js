const express = require('express');
const router = express.Router();
const list_controller = require('../controllers/listController');

router.post('/list', list_controller.list_create);
router.get('/list', list_controller.list_getall);
router.get('/list/:id', list_controller.list_getbyid);
router.put('/list/:id', list_controller.list_update);
router.delete('/list/:id', list_controller.list_delete);

module.exports = router;