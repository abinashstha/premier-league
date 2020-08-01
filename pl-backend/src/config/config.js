const config = {
    port: 5000,
    host: '127.0.0.1',
    baseUrl: 'https://raw.githubusercontent.com/openfootball/football.json/master/',
    api: {
        clubs: "/en.1.clubs.json",
        results: "/en.1.json"
    }
}
module.exports = config;