const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');
const jwtCookies = require('../models/createCookies')

const jwt_secret = 'LoginExisitingUser';
router.use(cookie_parser());

var Profiles = require("../models/profiles");


router.post('/', async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    console.log("username : ", username, "; password : ", password);
    const user = await Profiles.find({username : username, password : password});
    if(user.length!=0)
    {
        const token = jwtCookies(user[0]._id, jwt_secret);
        console.log(user);
        res.cookie('jwt',token,{
            maxAge: 2 * 60 * 60 * 1000, 
            httpOnly: false,
            secure: false,
            sameSite: false,
        });
        res.json(user);
    }
    else
        res.json({error : "User not found"});
    
    
});

module.exports = router;