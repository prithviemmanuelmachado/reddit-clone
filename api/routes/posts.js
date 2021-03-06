const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');

router.use(cookie_parser());

var Posts = require("../models/posts");

router.get('/', async function(req, res){
    const posts = await Posts.find().sort({createdOn: -1});
    res.json(posts);
});

module.exports = router;