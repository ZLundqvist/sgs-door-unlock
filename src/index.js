const axios = require('axios');
const express = require('express');

const port = 10111;
const unlock_url = 'http://hemma.sgsstudentbostader.se/DoorControl/PerformUnlock';

const params = new URLSearchParams();
params.append('epName', 'Lindholmsallén 25 Gatan');

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

async function unlock() {
    const response = await axios.post(unlock_url, params.toString(), config);
    const data = response.data;

    if(!data) {
        throw new Error('Kan inte öppna');
    }

    if(response.data.includes('error')) {
        throw new Error('Fel uppstod');
    }
}

const app = express();

app.post('/unlock', (req, res) => {
    unlock()
        .then(() => {
            res.send('Öppet!');
        })
        .catch((error) => {
            res.send(error.message);
        });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

