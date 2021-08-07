const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwtCookies = require('../models/createCookies');
router.use(cookie_parser());

const Profiles = require("../models/profiles");


router.post('/', async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const user = await Profiles.findOne({username : username});
    const result = await bcrypt.compare(password, user.password); 
    if(result === true)
    {
        const token = jwtCookies(user._id);
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