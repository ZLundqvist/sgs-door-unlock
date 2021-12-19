
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
    const message = root.querySelector('.doorControlMessage').text.trim();
    return message;
}

module.exports = (req, res) => {
    unlock()
        .then((message) => {
            console.log('[%s] %s %s => %s', new Date().toLocaleString(), req.path, req.ip, message);
            res.send(message);
        })
        .catch((error) => {
            console.error('[%s] %s %s => %s', new Date().toLocaleString(), req.path, req.ip, error.message);
            res.send(error.message);
        });
};