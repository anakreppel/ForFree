const mongoose = require('../db');

const itemSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Item', itemSchema);