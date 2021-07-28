const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');

router.use(cookie_parser());
const Posts = require("../models/posts");

router.get('/', function(req, res){
    const cookie = req.cookies.jwt;
    console.log("cookie", cookie);
    if(cookie)
        res.json({isLoggedIn : true});
    else
        res.json({isLoggedIn : false});
});

router.get('/getposts', async function(req, res){
    const posts = await Posts.find();
    res.json(posts);
});

module.exports = router;