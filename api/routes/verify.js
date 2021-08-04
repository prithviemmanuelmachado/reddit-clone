const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');

router.use(cookie_parser());

router.get('/', function(req, res){
    const cookie = req.cookies.jwt;
    if(cookie)
    {
        
        res.json({isLoggedIn : true});
    }
    else
        res.json({isLoggedIn : false});
});

module.exports = router;