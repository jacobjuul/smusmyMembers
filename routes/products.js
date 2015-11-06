var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');
var bodyParser = require('body-parser');



router.get('/', function(req, res) {
    Product.find({}, function(err, products) {
        if (err)
            throw err;

        res.render('front/index', {
            products: products
        });
    });
});

router.route('/:productId?')
    .get(function(req, res) {

        Product.findById(req.params.productId, function(err, product) {
            if (err)
                throw err;

            res.render('front/product', {
                product: product
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
        Product.findById(req.params.productId, function(err, product) {
            product.remove(function(err) {
                if (err) throw err;

            });
        });
    });

module.exports = router;