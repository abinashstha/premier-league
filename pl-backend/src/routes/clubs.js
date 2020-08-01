const router = require('express').Router();
const axios = require('axios');
const config = require('../config/config');

router.get('/', (req, res) => {
    const year = req.query.year;
    console.log(year);
    const requestUrl = config.baseUrl + year + config.api.clubs;
    axios.get(requestUrl)
        .then(resp => {
            res.send(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;