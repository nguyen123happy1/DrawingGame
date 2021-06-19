const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/DrawingGame',{
    useNewUrlParser:true,
    useUnifiedTopology: true
    
});
var db = mongoose.connection
db.on('error',() => console.log("Error in connecting database"));
db.once('open',() => console.log("Connected to database"));

exports.getUser = db.collection('user_table');
exports.getRoom = db.collection('room_table');