const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

const Profiles = mongoose.model('profile', profileSchema);

module.exports = Profiles;