const express    = require('express');
const app        = express();
const ejs        = require('ejs');
const path       = require('path');
const mongoose   = require('mongoose');

// database
mongoose.connect('mongodb://localhost:27017/matteo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('database connnected');
    
    const MovieModel = require('./model/movie.js');
    
    // instanciate model
    var Newmovie = new MovieModel({ name: 'Silence' });
    console.log(Newmovie); // 'Silence'
    
    // save instance
    // Newmovie.save(function (err, item) {
    //     if (err) return console.error(err);
    //     item.speak();
    // });

    // query document
    MovieModel.find(function(err, item) {
        if (err) return console.error(err);
        console.log(item);
    });
    
    MovieModel.find(
        { name: /^Sile/ }, 
        function(err, item) {
            if (err) return console.error(err);
            console.log(item);
        }
    );
});

// rendering engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// serve static sources
app.use(express.static( path.join(__dirname, '../public') ));
app.use(express.static('client/app'));

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