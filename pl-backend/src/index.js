const config = require('./config/config');
const app = require('./app');

app.listen(config.port, () => {
    console.log(`Server running at http://${config.host}:${config.port}/api/results/?year=2019-20`);
});