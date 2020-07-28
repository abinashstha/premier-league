const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(cors());
app.use(
    bodyParser.json({
        limit: '50mb'
    })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

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

