const express = require('express');
const router = express.Router();
const getDataController = require('../controller/getData');
router.get('/getData', getDataController);