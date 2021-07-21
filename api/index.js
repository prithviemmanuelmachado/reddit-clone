const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});