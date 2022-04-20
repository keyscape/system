const express = require('express');
var router = express.Router();

const controller = require('../controllers/index.controller');

router.get('/', controller.get);

module.exports = router;
