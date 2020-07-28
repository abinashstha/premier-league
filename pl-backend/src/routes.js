const express = require('express');
const config = require('./config/config');
const router = express.Router();
const pl_table = require('./controller/pl_table');

router.use('/', pl_table);

module.exports = router;