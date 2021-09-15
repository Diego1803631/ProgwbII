const express = require('express');
const router = express.Router();
const movie_controller = require('../controllers/movieController');

router.post('/movie', movie_controller.movie_create);
router.get('/movie', movie_controller.movie_getall);
router.get('/movie/:id', movie_controller.movie_getbyid);
router.put('/movie/:id', movie_controller.movie_update);
router.delete('/movie/:id', movie_controller.movie_delete);

module.exports = router;