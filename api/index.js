const express = require('express');
const process = require('process');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');
const database = require('./models/init');
const router = require('./routes');

process.env.PORT = 8080;
const port = process.env.PORT;
app.use(cors({origin : 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'static')));
app.use(router);

database(function(err){
    if(!err)
    {
        app.listen(port, ()=>{
            console.log(`Example app listening at http://localhost:${port}`);
        });
    }
});


process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected on app termination');
      process.exit(0);
    });
});
  