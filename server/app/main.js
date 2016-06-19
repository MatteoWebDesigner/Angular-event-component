const express      = require('express');
const app          = express();
const router       = express.Router();
const swig         = require('swig');
const path         = require('path');
const mongoose     = require('mongoose');
const bodyParser   = require('body-parser');
var db;


// database
mongoose.connect('mongodb://localhost:27017/matteo');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('database connnected');

    // var MovieModel = require('./model/movie.js');
    // var Newmovie = new MovieModel({
    //     title: 'Teenage Mutant Ninja Turtles: Out of the Shadows (2016)',
    //     description: 'Phasellus id ex ac sem eleifend ullamcorper. Vivamus cursus orci lectus. Morbi nisl diam, efficitur et lorem a, pellentesque pharetra tellus.',
    //     cover: {
    //         url: 'https://i.ytimg.com/vi/3Z1mfY5qOAQ/maxresdefault.jpg',
    //         alt: 'turtle cover'
    //     },
    //     vote: 5,
    //     release_date: Date('2014-12-08'),
    //     published: true
    // });
    // 
    // Newmovie.save();
});


// rendering engine
app.engine('html', swig.renderFile);
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


// serve static sources
app.use(express.static( path.join(__dirname, '../public') ));
app.use(express.static('client/app'));


// parse body API
app.use(bodyParser.json()); // for parsing application/json


// routes global methods
router.use(function (req, res, next) {
    app.locals.routeMatch = function (route) {
        return req.originalUrl == route;
    }

    next();
});


// routes
router.get('/404', (req, res) => {
    res.render('404');
});

router.get('/', (req, res) => {
    const MovieModel = require('./model/movie.js');

    MovieModel
        .find()
        .limit(4)
        .exec(function(err, data) {
            if (err) return console.error(err);
            
            res.render('index', {
                movies: data
            });
        });
});

router.get('/movies/', (req, res) => {
    const MovieModel = require('./model/movie.js');

    MovieModel
        .find()
        .limit(10)
        .exec(function(err, data) {
            if (err) return console.error(err);
            
            res.render('movie_list', {
                movies: data
            });
        });
});

router.get('/movies/:slug', (req, res) => {
    const MovieModel = require('./model/movie.js');

    MovieModel
        .findOne({slug:req.params.slug})
        .exec(function(err, data) {
            if (err) return console.error(err);
            
            if (data) {
                res.render(
                    'profile',
                    {
                        movie: data
                    }
                );
            } else {
                res.redirect('/404');
            }
        });
});

router.get('/admin/', (req, res) => {
    res.render('admin');
});

app.use('/', router);


// api
app.use('/api', require('./api/movie.js'));


// run server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});