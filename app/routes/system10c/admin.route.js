const express = require('express');
var router = express.Router();

const controller = require('../../controllers/system10c/admin.controller');

function middlewareAuth(req, res, next) {
	if (req.isAuthenticated() && req.user.isAdmin) return next();
	else res.redirect('/room10c/login');
}

router.get('/room10c/admin', middlewareAuth, controller.get);
router.post('/room10c/admin/createGroup', middlewareAuth, controller.postCreateGroup);
router.get('/room10c/admin/intervalAllGroups/:nGroups', middlewareAuth, controller.getIntervalAllGroups);


router.get('/room10c/admin/updateGroup/show/:id', middlewareAuth, controller.getUpdateGroup);
router.post('/room10c/admin/updateGroup', middlewareAuth, controller.postUpdateGroup);
router.get('/room10c/admin/intervalOneGroup/:idGroup/:whatToUpdate', middlewareAuth, controller.getIntervalOneGroup);
router.get('/room10c/admin/updateGroup/module/:idGroup/:nameModule', middlewareAuth, controller.getUpdateGroupModule);
router.post('/room10c/admin/updateGroup/module', middlewareAuth, controller.postUpdateGroupModule);

module.exports = router;