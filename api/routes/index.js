const express = require('express');
const router = express.Router();

const createNewUser = require('./createNewUser');
const login = require('./login');
const posts = require('./posts');
const logout = require('./logout');
const verify = require('./verify');
const subreddit = require('./subreddit');
const createNewPost = require('./createNewPost');
const comments = require('./comments');

router.use("/createNewUser", createNewUser);
router.use("/login", login);
router.use("/posts", posts);
router.use("/verify", verify);
router.use("/logout", logout);
router.use("/subreddit", subreddit);
router.use("/createNewPost", createNewPost);
router.use("/comments", comments);

module.exports = router;