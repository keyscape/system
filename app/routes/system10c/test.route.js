const express = require('express');
var router = express.Router();

const controller = require('../../controllers/system10c/test.controller');

router.get('/room10c/test/module/:name/:code', controller.get);

module.exports = router;