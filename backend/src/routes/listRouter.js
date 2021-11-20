const express = require('express');
const router = express.Router();
const list_controller = require('../controllers/listController');
const checkJwt = require('../middleware/checkJwt');

router.post('/list', checkJwt, list_controller.list_create);
router.get('/list', list_controller.list_getall);
router.get('/list/:id', list_controller.list_getbyid);
router.put('/listUpdate', list_controller.list_update);
router.delete('/list/:id', list_controller.list_delete);
router.get('/listbyUser', list_controller.list_getbyUser);
router.put('/listRemove', list_controller.list_remove);

module.exports = router;