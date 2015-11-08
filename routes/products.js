var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');
var bodyParser = require('body-parser');



router.get('/', function(req, res) {
  Product.find({}, function(err, products) {
    if (err)
      throw err;

    res.render('front/products', {
      products: products
    });
  });
});

router.route('/:productPath?')
  .get(function(req, res) {
    Product.find({
      productPath: req.params.productPath,
    }, function(err, productRes) {
      if (err)
        console.log(err);

      res.render('front/product', {
        product: productRes[0]
      });

    });

  })
  .post(function(req, res) {

    var product = new Product(req.body);

    console.log(product);
    product.save(function(err) {
      if (err)
        throw err;

      res.redirect('/products/' + product._id);
    });
  })
  .delete(function(req, res) {
    Product.remove({
      productPath: req.params.productPath
    }, function(err, product) {
      if (err)
        console.log(err);

      res.redirect('/');
    });
  });

module.exports = router;

