const mongoose = require('mongoose');

const subredditSchema = new mongoose.Schema({
    title: String,
    displayImage: String,
    backgroundImage: String
});

const Subreddit = mongoose.model('subreddit', subredditSchema);

module.exports = Subreddit;