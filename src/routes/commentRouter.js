const express = require('express');
const router = express.Router();
const comment_controller = require('../controllers/commentController');

router.post('/comment', comment_controller.comment_create);
router.get('/comment', comment_controller.comment_getall);
router.get('/comment/:id', comment_controller.comment_getbyid);
router.put('/comment/:id', comment_controller.comment_update);
router.delete('/comment/:id', comment_controller.comment_delete);

module.exports = router;