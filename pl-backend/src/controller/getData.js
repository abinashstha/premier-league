const config = require('config');
const axios = require('axios');
const baseUrl = config.baseUrl;

module.exports = async function() {
    try {
        axios.get(baseUrl).then(
            response =>{
                //response.send(response.data)
                console.log(response.data);
            }
        );
    } catch (e) {
        console.log(e);
    }
}