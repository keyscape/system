const express = require('express');
var router = express.Router();

const passport = require('passport')

const controller = require('../../controllers/room10c/group.controller');
const ParticipantModel = require('../../models/Participant.model');

function middlewareAuth(req, res, next) {
	if (req.isAuthenticated()) return next();
	else res.redirect('/room10c/login');
}

router.get('/room10c/group/:code', middlewareAuth, controller.get);
router.get('/room10c/update/init/:idGroup', middlewareAuth, controller.getUpdateInitPage);
router.get('/room10c/update/final/:idGroup', middlewareAuth, controller.getUpdateFinalPage);
router.get('/room10c/update/room/:idGroup', middlewareAuth, controller.getUpdateRoomPage);
router.post('/room10c/moduleDone/', middlewareAuth, controller.postModuleDone);
router.post('/room10c/moduleDoneOmega/', middlewareAuth, controller.postModuleDoneOmega);

module.exports = router;