const express = require('express');
const router = express.Router();
const multer = require('multer');
const cookie_parser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const jwt_secret = 'assdgasetdfn32124n';


router.use(cookie_parser());
const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, 'static/images/');
    },
    filename: (req, file, callback)=>{
        callback(null, file.originalname);
    }
});
var upload = multer({ storage : storage });

const Subreddit = require("../models/subreddit");
const Following = require("../models/following");
const Posts = require("../models/posts");

router.get('/', async function(req, res){
    const subreddits = await Subreddit.find().limit(10);
    res.json(subreddits);
});

router.post('/getSubreddit', async function(req, res){
    const id = req.body.id;
    const subreddit = await Subreddit.findOne({_id:id});
    res.json(subreddit);
});

router.post('/getPosts', async function(req, res){
    const id = req.body.id;
    const posts = await Posts.find({subreddit:id}).sort({createdOn: -1});
    res.json(posts);
});

router.get('/getFollowedSubreddits', async function(req, res){
    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token, jwt_secret, async(err, decodedToken)=>{
            const following = await Following.find({userId : decodedToken.userId});
            if(following.length!==0)
            {
                let subredditIds=[];
                following.forEach((data, index)=>{
                    subredditIds.push(data.subredditId)
                });
                const subreddits = await Subreddit.find({_id : {$in : subredditIds}});
                res.json(subreddits);
            }
            else
            {
                res.json([{title : "None", displayImage : 'loading'}]);
            }
        });
    }
    else
    {
        res.json([{title : "None", displayImage : 'loading'}]);
    }
});


router.get('/getTopSubreddits', async function(req, res){
    const subreddits = await Subreddit.find().sort({followerCount : -1}).limit(10);
    res.json(subreddits); 
});

router.post('/', upload.fields([{ name : 'displayImage', maxCount : 1}, { name : 'backgroundImage', maxCount : 1}]), async function(req, res){
    
    const displayImage = req.files.displayImage ? req.files.displayImage[0].filename : 'none';
    const backgroundImage = req.files.backgroundImage ? req.files.backgroundImage[0].filename : 'none';
    const newSubreddit = new Subreddit({
        title:req.body.title,
        displayImage:displayImage,
        backgroundImage:backgroundImage,
        followerCount:1

    });
    newSubreddit.save().then(()=>{
        res.json({status:'created'});
    }).catch((err)=>{
        res.json(err);
    });
});

module.exports = router;