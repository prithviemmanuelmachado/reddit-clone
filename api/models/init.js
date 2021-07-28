const mongoose = require('mongoose');

const uri ="mongodb+srv://root:root@cluster0.lhzpr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


function init(callback)
{
  mongoose.connect(uri, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on('error',function (err)
  {
    console.log("Error on connecting to db");
    callback(err);
  });

  db.once('open', function() {
    console.log("Connected to db");
    callback(null);
  });
}

module.exports = init;