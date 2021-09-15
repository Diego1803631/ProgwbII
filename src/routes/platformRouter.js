const express = require('express');
const router = express.Router();
const platform_controller = require('../controllers/platformController');

router.post('/platform', platform_controller.platform_create);
router.get('/platform', platform_controller.platform_getall);
router.get('/platform/:id', platform_controller.platform_getbyid);
router.put('/platform/:id', platform_controller.platform_update);
router.delete('/platform/:id', platform_controller.platform_delete);

module.exports = router;