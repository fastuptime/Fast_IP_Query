const axios = require('axios');

async function sorgu(ip) {
    let response = await axios.get(`https://ipinfo.io/${ip}/geo`);
    response = JSON.stringify(response.data);
    response = JSON.parse(response);
    return response;
}

module.exports = { sorgu };