const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  secimg: { type: String },
  rating: { type: Number, default: 0 },
  sold: { type: Number, default: 0 },
});

module.exports = mongoose.model('Product', productSchema);
