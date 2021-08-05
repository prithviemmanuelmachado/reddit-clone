const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const jwt_secret = 'assdgasetdfn32124n';

const Following = require('../models/following');
var Subreddit = require("../models/subreddit");

router.use(cookie_parser());

router.post('/isFollowing',async function(req,res){
    subredditId = req.body.id;
    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token, jwt_secret, async(err, decodedToken)=>{
            const isFollowing = await Following.findOne().and([{userId : decodedToken.userId},{subredditId : subredditId}]);
            if(!isFollowing)
            {
                res.json({isFollowing : false});
            }
            else
            {
                res.json({isFollowing : true});
            }
        });
        
    }
    else
    {
        res.json({isFollowing : false});
    }
});

router.post('/', async function(req, res){
    subredditId = req.body.id;
    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token, jwt_secret, async(err, decodedToken)=>{
            const isFollowing = await Following.findOne().and([{userId : decodedToken.userId},{subredditId : subredditId}]);
            if(!isFollowing)
            {
                const follow = new Following({
                    userId: decodedToken.userId,
                    subredditId: subredditId
                });
                follow.save().then(async()=>{
                    const subreddit = await Subreddit.findOne({_id : subredditId});
                    Subreddit.findOneAndUpdate({_id : subredditId}, {followerCount : subreddit.followerCount+1}, (err)=>{
                        console.log(err);
                    });
                    res.json({isFollowing : true});
                }).catch(err=>console.log(err));

            }
            else
            {
                Following.findOneAndDelete({_id : isFollowing._id}, async function(err, doc){
                    console.log(err, doc);
                    if(doc)
                    {
                        const subreddit = await Subreddit.findOne({_id : subredditId});
                        Subreddit.findOneAndUpdate({_id : subredditId}, {followerCount : subreddit.followerCount-1}, (err)=>{
                            console.log(err);
                        });
                        res.json({isFollowing : false});
                    }
                })
            }
        });
    }
    else
    {
        res.json({isLoggedIn : false});
    }
});

module.exports = router;