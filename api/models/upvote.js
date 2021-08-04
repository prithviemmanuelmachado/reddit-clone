const mongoose = require('mongoose');

const upvoteSchema = new mongoose.Schema({
  votedOn : String,
  votedBy : String
});

const Upvote = mongoose.model('upvotes', upvoteschema);

module.exports = Upvote;