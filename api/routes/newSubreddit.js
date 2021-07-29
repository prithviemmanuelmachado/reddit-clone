const express = require('express');
const router = express.Router();
const multer = require('multer');
const cookie_parser = require('cookie-parser');

router.use(cookie_parser());
var upload = multer({ dest: 'static/images/' });

var Subreddit = require("../models/subreddit");

router.post('/', upload.fields([{ name : 'displayImage', maxCount : 1}, { name : 'backgroundImage', maxCount : 1}]), async function(req, res){
    
    const displayImage = req.files.displayImage ? req.files.displayImage[0].filename : 'none';
    const backgroundImage = req.files.backgroundImage ? req.files.backgroundImage[0].filename : 'none';
    const newSubreddit = new Subreddit({
        title:req.body.title,
        displayImage:displayImage,
        backgroundImage:backgroundImage

    });
    newSubreddit.save().then(()=>{
        res.json({status:'created'});
    }).catch((err)=>{
        res.json(err);
    });
});

module.exports = router;