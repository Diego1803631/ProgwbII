const express = require('express');
const router = express.Router();
const userlikes_controller = require('../controllers/userlikesController');
const checkJwt = require('../middleware/checkJwt');

router.post('/userlikes', checkJwt, userlikes_controller.userlikes_create);
router.get('/userlikes', userlikes_controller.userlikes_getall);
router.get('/userlikes/:id', userlikes_controller.userlikes_getbyid);
router.put('/userlikes/:id', userlikes_controller.userlikes_update);
router.delete('/userlikes/:id', userlikes_controller.userlikes_delete);
router.get('/userlikesUser', userlikes_controller.userlikes_getbyUser);
router.delete('/userlikesDelete', userlikes_controller.userlikes_deleteMovieID);

module.exports = router;