const mongoose = require('mongoose');

const upvoteSchema = new mongoose.Schema({
  votedOn : String,
  votedBy : String
});

const Upvotes = mongoose.model('upvotes', upvoteSchema);

module.exports = Upvotes;