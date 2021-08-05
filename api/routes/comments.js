const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const jwt_secret = 'assdgasetdfn32124n';

router.use(cookie_parser());

const Comments = require("../models/comments");
const Profiles = require("../models/profiles");

router.post('/get', async function(req, res){
    const post = req.body.id;
    const comments = await Comments.find({commentedOn : post}).sort({createdOn: -1});
    res.json(comments);
});

router.post('/', async function(req, res){

    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token, jwt_secret, async (err, decodedToken)=>{
            const date = new Date();
            const text = req.body.comment;
            const createdBy = decodedToken.userId;
            const getcreatedByUsername =  await Profiles.findOne({_id : createdBy});
            const createdByUsername = getcreatedByUsername.username;
            const createdOn = date;
            const commentedOn = req.body.commentedOn;
            const upVote = 0;
            const downVote = 0;
            const newComment = new Comments({
                text : text,
                createdBy : createdBy,
                createdOn : createdOn,
                createdByUsername : createdByUsername,
                commentedOn : commentedOn,
                upVote : upVote,
                downVote : downVote
            });
            newComment.save().then(()=>{
                console.log("commented");
                res.json(newComment);
            }).catch((err)=>
            {
                console.log(err);
                res.json(err);
            });
        });
    }
    else
    {
        res.json({isLoggedIn : false});
    }

    
    
});

module.exports = router;