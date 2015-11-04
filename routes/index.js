var express = require('express');
var router = express.Router();
var House = require('../models/house.js');
var bodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/cribs', function(req, res) {
    House.find({}, function(err, houses) {
        if (err)
            throw err;

        res.render('index', {
            houses: houses
        });
    });
});

router.post('/crib', function(req, res) {
    var crib = new House(req.body);

    crib.save(function(err) {
        if (err)
            throw err;

        res.redirect('/cribs');
    });
});

module.exports = router;