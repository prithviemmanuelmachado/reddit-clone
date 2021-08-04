const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const jwt_secret = 'assdgasetdfn32124n';
const router = express.Router();
const cookie_parser = require('cookie-parser');

router.use(cookie_parser());

const Posts = require("../models/posts");
const Profiles = require("../models/profiles");

var upload = multer({ dest: 'static/images/' });

router.post("/", upload.single('image'), function(req, res){
    const token = req.cookies.jwt;
    jwt.verify(token, jwt_secret, async(err, decodedToken)=>{
        const date = new Date();
        const createdBy = decodedToken.userId;
        const getcreatedByUsername =  await Profiles.findOne({_id : createdBy});
        const createdByUsername = getcreatedByUsername.username;
        const filename = req.file ? req.file.filename : 'none';
        const newPost = new Posts({
            title : req.body.title,
            text : req.body.text,
            createdBy : createdBy,
            createdByUsername : createdByUsername,
            createdOn : date,
            imageName : filename,
            subreddit : req.body.subreddit,
            upVote : 0,
            downVote : 0
        });
        newPost.save().then(()=>{
            console.log('Posted');
            res.json({posted: 'posted'});
        }).catch((err)=>{
            console.log(err);
        });
    });
    
});

module.exports = router;