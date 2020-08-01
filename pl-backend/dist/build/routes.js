'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _clubs = require('./routes/clubs');

var _clubs2 = _interopRequireDefault(_clubs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var router = (0, _express.Router)();

router.get('/', function (req, res) {});

router.use('/clubs', _clubs2.default);

exports.default = router;