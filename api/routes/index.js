const express = require('express');
const router = express.Router();

const createNewUser = require('./createNewUser');
const login = require('./login');
const posts = require('./posts');
const logout = require('./logout');
const verify = require('./verify');
const follow = require('./follow');
const subreddit = require('./subreddit');
const createNewPost = require('./createNewPost');
const search = require('./search');
const votes = require('./votes');
const comments = require('./comments');

router.use("/createNewUser", createNewUser);
router.use("/login", login);
router.use("/posts", posts);
router.use("/verify", verify);
router.use("/logout", logout);
router.use("/search", search);
router.use("/votes", votes);
router.use("/follow", follow);
router.use("/subreddit", subreddit);
router.use("/createNewPost", createNewPost);
router.use("/comments", comments);

module.exports = router;