const express = require('express');

const app = express();
app.set('port', 10111);

app.post('/unlock', require('./unlock'));

app.listen(app.get('port'), () => {
    console.log(`App listening at http://localhost:${app.get('port')}`);
});

