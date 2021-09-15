const express = require('express');
const router = express.Router();
const followers_controller = require('../controllers/followersController');

router.post('/followers', followers_controller.followers_create);
router.get('/followers', followers_controller.followers_getall);
router.get('/followers/:id', followers_controller.followers_getbyid);
router.put('/followers/:id', followers_controller.followers_update);
router.delete('/followers/:id', followers_controller.followers_delete);

module.exports = router;