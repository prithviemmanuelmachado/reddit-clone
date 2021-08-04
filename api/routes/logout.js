const express = require('express');
const router = express.Router();
const cookie_parser = require('cookie-parser');
router.use(cookie_parser());

router.get('/', async function(req, res){
    res.cookie('jwt', '', {maxAge:1});
    res.json({isLoggedOut : true});    
});

module.exports = router;