const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');
const jwtCookies = require('../models/createCookies')

router.use(cookie_parser());

var Profiles = require("../models/profiles");

router.get('/', async function(req, res){
    const users = await Profiles.find();
    res.json(users);
});

router.post('/', async function(req, res){
    const users = await Profiles.find();
    let errors = {};
    users.every((user, index)=>{
        if(user.username==req.body.username)
        {            
            errors["errorUsername"]="Username Exists";
        }
        if(user.email==req.body.email)
        {
            errors["errorEmail"]="Email Exists";
        }
        
        if(Object.keys(errors).length!=0)
        {
            return false;
        }
        return true;
    });
    console.log("errors", errors);
    if(Object.keys(errors).length==0)
    {
        
        const newUser = new Profiles({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        });
        console.log(newUser);
        newUser.save().then(()=>{
            console.log("New User Entered");
            const token = jwtCookies(newUser._id);
            res.cookie('jwt',token,{
                maxAge: 2 * 60 * 60 * 1000, 
                httpOnly: false,
                secure: false,
                sameSite: false,
              });
            res.json(newUser);
        }).catch((err)=>{
            console.log(err);
        });
    }
    else
        res.json(errors);
    
    
});

module.exports = router;