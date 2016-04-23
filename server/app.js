const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('server/public'));

app.get('/', (req, res) => {
    res.sendFile('./server/public/index.html');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});