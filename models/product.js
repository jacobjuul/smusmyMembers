var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    headline: String,
    description: String,
    location: {
        city: String,
        street: String,
        number: Number,
        zipCode: Number,
    },
    images: [{
        url: String
    }],
    size: Number,
    floor: Number,
    year: Number,
    created_at: Date,
    updated_at: Date
});

ProductSchema.pre('save', function(next) {
    if (!this.created_at) {
        this.created_at = new Date();
    }
    next();
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;