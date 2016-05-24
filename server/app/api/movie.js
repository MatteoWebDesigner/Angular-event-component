const express = require('express');

const MovieModel = require('../model/movie.js');

var router = express.Router();

router
    .route('/movies')
    .get(function(req, res) {
        // instanciate model
        var Newmovie = new MovieModel();
        
        MovieModel.find(function(err, data) {
            if (err) return console.error(err);
            res.json(data);
        });
    })
    .post(function(req, res) {
        // instanciate model
        var Newmovie = new MovieModel({ name: req.body.name });
        
        // save instance
        Newmovie.save(function (err, item) {
            if (err) return res.status(500).send('Something broke!');
            
            res.json({message: 'ok'});
        });
    });

module.exports = router;