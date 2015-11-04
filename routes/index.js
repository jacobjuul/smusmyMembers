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


router.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

router.route('/crib/:cribId')
  .post(function(req, res) {
    var crib = new House(req.body);
    crib.save(function(err) {
      if (err)
        throw err;

      res.redirect('/cribs');
    });
  })
  .get(function(req, res) {
    House.findById(req.params.cribId, function(err, crib) {
      if (err)
        throw err;

      res.render('crib', {
        crib: crib
      });
    });
  });



module.exports = router;

