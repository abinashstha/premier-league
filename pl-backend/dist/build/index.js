'use strict';

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

_app2.default.listen(port, function () {
    console.log('Server running at http://' + _config2.default.host + ':' + _config2.default.port + '/api/clubs/?year=2019-20');
});