var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  category: String,
  productPath: {
    type: String,
    index: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
});

ProductSchema.pre('save', function(next) {
  this.productPath = this.title.replace(/ /g, '');
  next();
});

var VariantSchema = new Schema({
  name: String,
  value: String,
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

