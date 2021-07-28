const express = require('express');
const multer = require('multer');
const router = express.Router();

const Posts = require("../models/posts");

var upload = multer({ dest: 'static/images/' });

router.post("/", upload.single('image'), function(req, res){
    const date = new Date();
    const createdBy = 100000000001; // add the profile id here using the cookie here
    const filename = req.file ? req.file.filename : 'none';
    console.log("req.body ",req.body);
    const newPost = new Posts({
        title : req.body.title,
        text : req.body.text,
        createdBy : createdBy,
        createdOn : date,
        imageName : filename,
        subreddit : req.body.subreddit,
        upVote : 0,
        downVote : 0
    });
    newPost.save().then(()=>{
        console.log('Posted');
        res.json()
    }).catch((err)=>{
        console.log(err);
    });
});

module.exports = router;