const config = require('config');
const axios = require('axios');
const baseUrl = config.baseUrl;


module.exports = async function getData() {
    try {
        axios.get(baseUrl).then(
            response =>{
                console.log(response.data);
            }
        );
    } catch (e) {
        console.log(e);
    }
}