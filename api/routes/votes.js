const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const jwt_secret = 'assdgasetdfn32124n';

router.use(cookie_parser());

const Posts = require("../models/posts");
const Upvotes = require("../models/upvote");
const Downvotes = require("../models/downvote");

router.post('/upvote', function(req, res){
    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token, jwt_secret, async(err, decodedToken)=>{
            const isVoted = await Upvotes.findOne().and([{votedOn : req.body.id},{votedBy : decodedToken.userId}]);
            if(!isVoted)
            {
                const upvote = new Upvotes({
                    votedOn : req.body.id,
                    votedBy : decodedToken.userId
                });
                upvote.save().then(()=>{
                    Posts.findOneAndUpdate({_id : req.body.id}, {upVote : req.body.count+1}, (err)=>{
                        console.log(err);
                    })
                    res.json({voted:"success"});
                }).catch(err=>console.log(err));

            }
            else
            {
                Upvotes.findOneAndDelete({_id : isVoted._id}, function(err, doc){
                    console.log(err, doc);
                    if(doc)
                    {
                        Posts.findOneAndUpdate({_id : req.body.id}, {upVote : req.body.count-1}, (err)=>{
                            console.log(err);
                        })
                        res.json({voted:"removed"});
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


router.post('/downvote', function(req, res){
    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token, jwt_secret, async(err, decodedToken)=>{
            const isVoted = await Downvotes.findOne().and([{votedOn : req.body.id},{votedBy : decodedToken.userId}]);
            if(!isVoted)
            {
                const downvote = new Downvotes({
                    votedOn : req.body.id,
                    votedBy : decodedToken.userId
                });
                downvote.save().then(()=>{
                    Posts.findOneAndUpdate({_id : req.body.id}, {downVote : req.body.count+1}, (err)=>{
                        console.log(err);
                    })
                    res.json({voted:"success"});
                }).catch(err=>console.log(err));

            }
            else
            {
                Downvotes.findOneAndDelete({_id : isVoted._id}, function(err, doc){
                    console.log(err, doc);
                    if(doc)
                    {
                        Posts.findOneAndUpdate({_id : req.body.id}, {downVote : req.body.count-1}, (err)=>{
                            console.log(err);
                        })
                        res.json({voted:"removed"});
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