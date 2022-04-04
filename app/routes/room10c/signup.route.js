const express = require('express');
var router = express.Router();

const controller = require('../../controllers/room10c/signup.controller');

function middlewareAuth(req, res, next) {
	if(req.isAuthenticated()) res.redirect('/room10c');
    else return next();
}

router.get('/room10c/signup', middlewareAuth, controller.get);

router.post('/room10c/signup', controller.post)

module.exports = router;

//code/name/omegaPhase/res