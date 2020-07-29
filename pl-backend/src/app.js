const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('../src/config/config');
const baseUrl = config.baseUrl;
app.use(cors());
app.use(
    bodyParser.json({
        limit: '50mb'
    })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    const year = req.query.year;
    console.log(year);
    const requestUrl = baseUrl + year + '/en.1.json';
    axios.get(requestUrl)
        .then(resp => {
            res.send(resp.data);
        })
        .catch(err => {
            // Handle Error Here
            console.log(err);
        });
}
);
module.exports = app;

















// //const port = 4000;

// let year = '2015-16';
// let responseData = [];
// const base_url = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
// app.get(base_url, (req, res) => {
//     responseData = res.json(res.data);
//     res.on("end", () => { console.log(responseData));
// })

// app.listen(port, () => console.log(`app listening at port ${port}`));

