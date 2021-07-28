const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  text: String,
  createdBy: String,
  createdOn: Date,
  imageName: String,
  subreddit: String,
  upVote: Number,
  downVote: Number
});

const Posts = mongoose.model('posts', postSchema);

module.exports = Posts;