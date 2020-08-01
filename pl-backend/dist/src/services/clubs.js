'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getClubs = getClubs;
exports.getResults = getResults;

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getClubs(year) {
    var requestUrl = _config2.default.baseUrl + year + _config2.default.api.clubs;
    await _https2.default.get(requestUrl).then(function (resp) {
        res.send(resp.data);
    }).catch(function (err) {
        console.log(err);
    });
}

async function getResults(year) {
    var requestUrl = _config2.default.baseUrl + year + _config2.default.api.results;
    await _https2.default.get(requestUrl).then(function (resp) {
        res.send(resp.data);
    }).catch(function (err) {
        console.log(err);
    });
}