const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const jwt_secret = 'assdgasetdfn32124n';

const Following = require('../models/following');

router.use(cookie_parser());

router.post('/follow', async function(req, res){
    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token, jwt_secret, (err, decodedToken)=>{
            const follow = new Following({
                userId: decodedToken.userId,
                subredditId: req.body.subredditId
            });
        });
    }
});

module.exports = router;