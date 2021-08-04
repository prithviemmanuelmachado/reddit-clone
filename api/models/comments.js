const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  createdBy: String,
  createdByUsername: String,
  createdOn: Date,
  commentedOn: String,
  upVote: Number,
  downVote: Number
});

const Comments = mongoose.model('comments', commentSchema);

module.exports = Comments;