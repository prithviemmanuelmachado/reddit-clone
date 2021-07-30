const express = require('express');
const router = express.Router();
const multer = require('multer');
const cookie_parser = require('cookie-parser');

router.use(cookie_parser());
const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, 'static/images/');
    },
    filename: (req, file, callback)=>{
        callback(null, file.originalname);
    }
});
var upload = multer({ storage : storage });

var Subreddit = require("../models/subreddit");

router.get('/', async function(req, res){
    const subreddits = await Subreddit.find().limit(10);
    res.json(subreddits);
});

router.get('/getImage', function(req, res){
    let image = req.body.image;
    console.log(image);
    res.sendFile(image);
});

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