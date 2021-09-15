const express = require('express');
const router = express.Router();
const userlikes_controller = require('../controllers/userlikesController');

router.post('/userlikes', userlikes_controller.userlikes_create);
router.get('/userlikes', userlikes_controller.userlikes_getall);
router.get('/userlikes/:id', userlikes_controller.userlikes_getbyid);
router.put('/userlikes/:id', userlikes_controller.userlikes_update);
router.delete('/userlikes/:id', userlikes_controller.userlikes_delete);

module.exports = router;