const express = require('express');
const path    = require('path');
const app     = express();
const ejs     = require('ejs');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static( path.join(__dirname, 'public') ));
app.use(express.static('client/app'));

// routes
app.get('/', (req, res) => {
    res.render('index');
});

// serve angular template
// app.get('/', (req, res) => {
//     res.sendFile( path.join(__dirname, 'public') );
// });

// run server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});