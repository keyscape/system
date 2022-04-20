const express = require('express');
var router = express.Router();

const passport = require('passport')

const controller = require('../../controllers/room10c/login.controller');

function middlewareAuth(req, res, next) {
	if (req.isAuthenticated()) res.redirect('/room10c');
    else return next();
}

router.get('/room10c/login', middlewareAuth, controller.get);

router.post('/room10c/login', 	
    passport.authenticate('local', {
        successRedirect: '/room10c',
        failureRedirect: '/room10c/login?err',
    }
))

module.exports = router;
