const express = require('express');
const router = express.Router();

const Subreddit = require("../models/subreddit");

router.post('/', async function(req, res){
    const searchTerm = req.body.searchTerm;
    if(searchTerm === "")
    {
        res.json([]);
    }
    else
    {
        const subreddits = await Subreddit.find({title : new RegExp(searchTerm, 'i')}).limit(10);
        res.json(subreddits);
    }
    
});

module.exports = router;