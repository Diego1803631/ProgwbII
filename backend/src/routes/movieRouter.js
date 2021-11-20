const express = require('express');
const router = express.Router();
const movie_controller = require('../controllers/movieController');
const checkJwt = require('../middleware/checkJwt');

router.post('/movie', checkJwt, movie_controller.movie_create);
router.get('/movie', movie_controller.movie_getall);
router.get('/movieScore', movie_controller.movie_orderbyScore);
router.get('/movieName', movie_controller.movie_orderbyName);
router.get('/movieDate', movie_controller.movie_orderbyDate);
router.get('/movie/:id', movie_controller.movie_getbyid);
router.put('/movieUpdateScore', movie_controller.movie_update);
router.delete('/movie/:id', movie_controller.movie_delete);
router.get('/movieTitle', movie_controller.movie_getbyTitle);
router.get('/movieSpecificTitle', movie_controller.movie_getbySpecificTitle);
router.get('/moviebyCategory', movie_controller.movie_getbyCategory);

module.exports = router;