const router = require('express').Router();
const axios = require('axios');

const config = require('../config/config');
const baseUrl = config.baseUrl;

router.get('/', (req, res) => {
    const year = req.query.year;
    console.log(year);
    const requestUrl = baseUrl + year + '/en.1.clubs.json';
    axios.get(requestUrl)
        .then(resp => {
            res.send(resp.data);
        })
        .catch(err => {
            // Handle Error Here
            console.log(err);
        });
});

module.exports = router;