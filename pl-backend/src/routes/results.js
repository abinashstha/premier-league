const router = require('express').Router();
const config = require('../config/config');
const baseUrl = config.baseUrl;
const axios = require('axios');

router.get('/', (req, res) => {
    const year = req.query.year;
    console.log(year);
    const requestUrl = baseUrl + year + '/en.1.json';
    axios.get(requestUrl)
        .then(resp => {
            res.send(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
});
module.exports = router;