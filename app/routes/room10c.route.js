const express = require('express');
var router = express.Router();

const controller = require('../controllers/room10c.controller');

router.get('/room10c/group/:code', controller.get);
router.get('/room10c/moduleDone/:code/:module', controller.getModuleDone);
router.get('/room10c/moduleOmegaNext/:code/:name/:omegaPhase/:res', controller.getModuleOmegaNext);
router.get('/room10c/moduleUpdate/:code', controller.getModuleUpdate);
router.get('/room10c/omegaUpdate/:code/:name', controller.getOmegaUpdate);
router.get('/room10c/updateInitTime/:code/:time', controller.getUpdateInitTime);

module.exports = router;

//code/name/omegaPhase/res