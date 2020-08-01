'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClubs = getClubs;

var _httpStatusCodes = require('http-status-codes');

var HttpStatus = _interopRequireWildcard(_httpStatusCodes);

var _clubs = require('../services/clubs');

var clubService = _interopRequireWildcard(_clubs);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

async function getClubs(req, res) {
  try {
    var response = await clubService.getClubs(req.query.year);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: 'created'
    });
  } catch (err) {
    next(err);
  }
}