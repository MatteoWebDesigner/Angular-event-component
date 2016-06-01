const express    = require('express');
const app        = express();
const swig       = require('swig');
const path       = require('path');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
var db;

// database
mongoose.connect('mongodb://localhost:27017/matteo');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('database connnected');
});

// rendering engine
app.engine('html', swig.renderFile);
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
;

// serve static sources
app.use(express.static( path.join(__dirname, '../public') ));
app.use(express.static('client/app'));

// parse body API
app.use(bodyParser.json()); // for parsing application/json

// routes
app.get('/', (req, res) => {
    res.render('index');
});

// api
app.use('/api', require('./api/movie.js'));

// run server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});