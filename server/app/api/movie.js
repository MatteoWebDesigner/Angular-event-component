const express = require('express');

var router = express.Router();

router.route('/movies')
    .get(function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
    })
    .post(function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
    });

module.exports = router;