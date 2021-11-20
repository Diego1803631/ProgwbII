const express = require('express');
const router = express.Router();
const review_controller = require('../controllers/reviewController');

router.post('/review', review_controller.review_create);
router.get('/review', review_controller.review_getall);
router.get('/review/:id', review_controller.review_getbyid);
router.put('/reviewUpdate', review_controller.review_update);
router.delete('/review/:id', review_controller.review_delete);
router.get('/reviewbyMovie', review_controller.review_getbyMovie);

module.exports = router;