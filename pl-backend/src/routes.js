const express = require('express');
const config = require('./config/config');
const router = express.Router();
const pl_table = require('./controller/getData');

router.use('/', getData);

module.exports = router;