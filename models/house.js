var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HouseSchema = new Schema({
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

HouseSchema.pre('save', function(next) {
  if (!this.created_at) {
    this.created_at = new Date();
  }
});

var House = mongoose.model('House', HouseSchema);

module.exports = House;

