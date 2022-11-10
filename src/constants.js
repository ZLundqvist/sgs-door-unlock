const UNLOCK_PARAMS = new URLSearchParams()
UNLOCK_PARAMS.append('epName', 'Lindholmsallén 25 Gatan');

module.exports = {
    UNLOCK_URL: 'http://hemma.sgs.se/DoorControl/PerformUnlock',
    UNLOCK_CONFIG: {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    },
    UNLOCK_PARAMS: UNLOCK_PARAMS.toString()
};
