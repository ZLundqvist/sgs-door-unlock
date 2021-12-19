
const axios = require('axios');
const parser = require('node-html-parser');
const constants = require('./constants');

async function unlock() {
    const response = await axios.post(constants.UNLOCK_URL, constants.UNLOCK_PARAMS, constants.UNLOCK_CONFIG);

    if(!response.data) {
        throw new Error('Kan inte öppna');
    }

    return getResponseMessage(response.data);
}

function getResponseMessage(data) {
    const root = parser.parse(data);
    const message = root.querySelector('.doorControlMessage').text;
    return message;
}


module.exports = (req, res) => {
    unlock()
        .then((message) => {
            res.send(message);
        })
        .catch((error) => {
            res.send(error.message);
        });
};