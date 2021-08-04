const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
  userId: String,
  subredditId: String
});

const Follows = mongoose.model('follows', followSchema);

module.exports = Follows;