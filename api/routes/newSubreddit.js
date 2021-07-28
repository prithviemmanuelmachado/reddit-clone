const express = require('express');
const router = express.Router();
const multer = require('multer');
const cookie_parser = require('cookie-parser');

router.use(cookie_parser());
var upload = multer({ dest: 'static/images/' });

var Subreddit = require("../models/subreddit");

router.post('/', upload.single('displayImage'), upload.single('backgroundImage'), async function(req, res){
    const newSubreddit = new Subreddit({
        title:req.body.title,

    });
    
});

module.exports = router;