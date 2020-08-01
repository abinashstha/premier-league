const HttpStatus = require('http-status-codes');
const clubService = require('../services/clubs');

const getClubs = async function(req, res) {
    try {
        const response = await clubService.getClubs(req.query.year);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: response,
            message: 'created'
        });
    } catch (err) {
        next(err);
    }
}
module.exports = getClubs;

module.exports = async function getResults(req, res) {
    try {
        const response = await clubService.getResults(req.query.year);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: response,
            message: 'created'
        });
    } catch (err) {
        next(err);
    }

}