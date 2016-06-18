const express      = require('express');
const app          = express();
const router       = express.Router();
const swig         = require('swig');
const path         = require('path');
const mongoose     = require('mongoose');
const mongooseSlug = require('mongoose-slug-generator');
const bodyParser   = require('body-parser');
var db;


// database
mongoose.connect('mongodb://localhost:27017/matteo');
mongoose.plugin(mongooseSlug),
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('database connnected');

    var MovieModel = require('./model/movie.js');
    var Newmovie = new MovieModel({
        title: 'Teenage Mutant Ninja Turtles: Out of the Shadows (2016)',
        description: 'Phasellus id ex ac sem eleifend ullamcorper. Vivamus cursus orci lectus. Morbi nisl diam, efficitur et lorem a, pellentesque pharetra tellus.',
        cover: {
            url: 'https://i.ytimg.com/vi/3Z1mfY5qOAQ/maxresdefault.jpg',
            alt: 'turtle cover'
        },
        vote: 5,
        //date_release: Date,
        published: true
    });

    Newmovie.save();
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
router.get('/', (req, res) => {
    res.render('index', {
        movies: [
            {
                title: 'Teenage Mutant Ninja Turtles: Out of the Shadows (2016)',
                description: 'Phasellus id ex ac sem eleifend ullamcorper. Vivamus cursus orci lectus. Morbi nisl diam, efficitur et lorem a, pellentesque pharetra tellus.',
                link: '/movies/teenage-mutant-ninja-turtles:-out-of-the-shadows-(2016)',
                cover: {
                    url: 'https://i.ytimg.com/vi/3Z1mfY5qOAQ/maxresdefault.jpg',
                    alt: 'turtle cover'
                }
            }
        ]
    });
});

router.get('/movies/', (req, res) => {
    res.render('movie_list', {
        movies: [
            {
                title: 'Teenage Mutant Ninja Turtles: Out of the Shadows (2016)',
                description: 'Phasellus id ex ac sem eleifend ullamcorper. Vivamus cursus orci lectus. Morbi nisl diam, efficitur et lorem a, pellentesque pharetra tellus.',
                link: '/movies/teenage-mutant-ninja-turtles:-out-of-the-shadows-(2016)',
                cover: {
                    url: 'https://i.ytimg.com/vi/3Z1mfY5qOAQ/maxresdefault.jpg',
                    alt: 'turtle cover'
                }
            }
        ]
    });
});

router.get('/movies/:slug', (req, res) => {
    res.render(
        'profile',
        {
            slug: req.params.slug
        }
    );
});

app.use('/', router);


// api
app.use('/api', require('./api/movie.js'));


// run server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});