const express = require('express');
const router = express.Router();
const following_controller = require('../controllers/followingController');

router.post('/following', following_controller.following_create);
router.get('/following', following_controller.following_getall);
router.get('/following/:id', following_controller.following_getbyid);
router.put('/following/:id', following_controller.following_update);
router.delete('/following/:id', following_controller.following_delete);

module.exports = router;