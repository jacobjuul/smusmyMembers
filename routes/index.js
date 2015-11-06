var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');
var bodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('front/index', {
        title: 'Express'
    });
});

router.get('/products', function(req, res) {
    Product.find({}, function(err, products) {
        if (err)
            throw err;

        res.render('front/index', {
            products: products
        });
    });
});

router.route('/product/:productId?')
    .post(function(req, res) {

        var product = new Product(req.body);

        console.log(product);
        product.save(function(err) {
            if (err)
                throw err;

            res.redirect('/product/' + product._id);
        });
    })
    .get(function(req, res) {
        Product.findById(req.params.productId, function(err, product) {
            if (err)
                throw err;

            res.render('front/product', {
                product: product
            });
        });
    })
    .delete(function(req, res) {
        Product.findById(req.params.productId, function(err, product) {
            product.remove(function(err) {
                if (err) throw err;

            });
        });
    });

module.exports = router;