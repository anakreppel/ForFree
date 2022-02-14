const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DB_URL;

try {
  mongoose.connect(url);
  console.log(`mongodb conected`);
} catch (e) { console.log(e) }

module.exports = mongoose;