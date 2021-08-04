const mongoose = require('mongoose');

const downvoteSchema = new mongoose.Schema({
  votedOn : String,
  votedBy : String
});

const Downvote = mongoose.model('downvotes', downvoteschema);

module.exports = Downvote;