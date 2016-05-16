const express = require('express');
const path    = require('path');
const app     = express();
const ejs     = require('ejs');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static( path.join(__dirname, 'public') ));

// routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/ejs', (req, res) => {

    var people = ['geddy', 'neil', 'alex'];

    res.render('test', {people:people});
});

// run server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});