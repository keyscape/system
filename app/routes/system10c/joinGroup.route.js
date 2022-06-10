const express = require('express');
var router = express.Router();

const controller = require('../../controllers/system10c/joinGroup.controller');

function middlewareAuth(req, res, next) {
	if (req.isAuthenticated()) return next();
	else res.redirect('/room10c/login');
}

router.post('/room10c/joinGroup', middlewareAuth, controller.post);

module.exports = router;