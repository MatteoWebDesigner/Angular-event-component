const _            = require('lodash');
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
});


// rendering engine
app.engine('html', swig.renderFile);
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


// serve static sources
app.use(express.static( path.join(__dirname, '../public') ));
app.use('/site',express.static('client/app'));
app.use('/spa',express.static('client/app-spa'));


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
    
    // CREATE
    // var Newmovie = new MovieModel({
    //     title: 'X-Men: Apocalypse',
    //     description: 'With the emergence of the world\'s first mutant, Apocalypse, the X-Men must unite to defeat his extinction level plan.',
    //     cover: {
    //         url: 'http://cdn1-www.comingsoon.net/assets/uploads/2016/04/xmenapocalypseimax-1.jpg',
    //         alt: 'x-men cover'
    //     },
    //     vote: 7,
    //     release_date: new Date('2016-05-27'),
    //     published: true
    // });
    // 
    // Newmovie.save();
    
    // UPDATE
    // MovieModel.findById('576692cbef34d5ea1f1152a7', function(err, movie) {
    //     if (err) throw err;
    // 
    //     _.assign(movie,{
    //         title: 'Finding Dory',
    //         description: 'The friendly-but-forgetful blue tang fish reunites with her loved ones, and everyone learns a few things about the real meaning of family along the way.',
    //         cover: {
    //             url: 'https://i.ytimg.com/vi/3JNLwlcPBPI/maxresdefault.jpg',
    //             alt: 'Finding Dory cover'
    //         },
    //         vote: 8,
    //         release_date: new Date('2016-06-17'),
    //         published: true
    //     });
    // 
    //     // save the user
    //     movie.save(function(err) {
    //         if (err) throw err;
    //         console.log('Movie successfully updated!');
    //     });
    // });

    MovieModel
        .find()
        .limit(4)
        .exec(function(err, data) {
            if (err) return console.error(err);
            
            res.render('site/index', {
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
            
            res.render('site/movie_list', {
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
                    'site/profile',
                    {
                        movie: data
                    }
                );
            } else {
                res.redirect('/404');
            }
        });
});

router.get('/admin/*', (req, res) => { // SPA app route
    res.render('spa/index');
});

app.use('/', router);


// api
app.use('/api', require('./api/movie.js'));


// run server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});