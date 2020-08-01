const router = require('express').Router();
const config = require('../config/config');
const axios = require('axios');

router.get('/', 
 (req, res) => {
    const year = req.query.year;
    console.log(year);
    const requestUrl = config.baseUrl + year + config.api.results;
    axios.get(requestUrl)
        .then(resp => {
            res.send(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
});
module.exports = router;