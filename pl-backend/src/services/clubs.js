const https = require('https');
const config = require('../config/config.js');

const getClubs = async function (year) {
    const requestUrl = config.baseUrl + year + config.api.clubs;
    await https.get(requestUrl)
        .then(resp => {
            res.send(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
}
module.exports = getClubs;

const getResults = async (year) => {
    const requestUrl = config.baseUrl + year + config.api.results;
    await https.get(requestUrl)
        .then(resp => {
            res.send(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
}
module.exports = getResults;