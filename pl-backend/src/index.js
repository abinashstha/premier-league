const config = require('./config/config');
const app = require('./app');

const port = config.port;
const host = config.host;

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}/api/results/?year=2019-20`);
});