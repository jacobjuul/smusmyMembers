var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


router.get('/', function(req, res) {
  mongoose.models.Product.find({}, function(err, products) {
    if (err)
      console.log(err);

    res.render('front/index', {
      products: products,
    });
  });
});


module.exports = router;

