const axios = require('axios');

const UNLOCK_URL = 'http://hemma.sgsstudentbostader.se/DoorControl/PerformUnlock';

const params = new URLSearchParams();
params.append('epName', 'Lindholmsallén 25 Gatan');

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

async function unlock() {
    const response = await axios.post(UNLOCK_URL, params.toString(), config);

    const data = response.data;
    console.log(data);

    if(!data) throw new Error('Response has no data');


    if(response.data.includes('error')) {
        throw new Error('Response includes error, unable to open');
    } else {
        console.log('Successfully unlocked');
    }
}

unlock();
