const express = require('express');
var router = express.Router();

const controller = require('../../controllers/room10c/user.controller');

function middlewareAuth(req, res, next) {
	if (req.isAuthenticated()) return next();
    else res.redirect('/room10c');
}

router.get('/room10c/user', middlewareAuth, controller.get);

router.post('/room10c/user', middlewareAuth, controller.post)

module.exports = router;