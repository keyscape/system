const express = require('express');
var router = express.Router();

const controller = require('../../controllers/system10c/index.controller');

function middlewareAuth(req, res, next) {
	if (req.isAuthenticated()) return next();
	else res.redirect('/room10c/login');
}

router.get('/room10c', middlewareAuth, controller.get);

module.exports = router;