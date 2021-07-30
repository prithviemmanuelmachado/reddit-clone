const express = require('express');
const router = express.Router();

const createNewUser = require('./createNewUser');
const login = require('./login');
const home = require('./home');
const subreddit = require('./subreddit');
const createNewPost = require('./createNewPost');

router.use("/createNewUser", createNewUser);
router.use("/login", login);
router.use("/", home);
router.use("/subreddit", subreddit);
router.use("/createNewPost", createNewPost);

module.exports = router;