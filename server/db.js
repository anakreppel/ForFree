const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/';

try {
  mongoose.connect(url);
  console.log(`mongodb conected`);
} catch (e) { console.log(e) }

module.exports = mongoose;