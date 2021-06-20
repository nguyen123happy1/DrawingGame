const express = require('express');
const router = express.Router();
const db = require('../config/db');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/',(req,res)=>res.send('Room Route'))

router.get('/getroom',(req,res)=>{
     db.getRoom.find().toArray(function(err,result){
         if (err)throw err;
         res.send(result);
     })
    
})

router.get('/getroombyname',(req,res)=>{
   var word = req.query.word;
   db.getRoom.find({name:word}).toArray(function(err,result){
	   if (err)throw err;
	   res.send(result);
   })
  
})
router.get('/getroombyid',(req,res)=>{
   var word = req.query.word;
   db.getRoom.find({_id:word}).toArray(function(err,result){
	   if (err)throw err;
	   res.send(result);
   })
  
})


router.post('/addroom', jsonParser, (req, res) => {
	
	roomName=req.body.roomName;
    points=req.body.points;
    capacity=req.body.capacity;
	console.log("Username: "+ roomName + " Password: "+points)

	// Simple validation
	if (!roomName || !points ||!capacity)
		return res
			.status(400)
			.send({ success: false, message: 'Missing fields' })

    else try {
				db.getRoom.findOne({name: roomName}).then(data => {
					if (data){
						console.log("Multiple room names")
						res.send({
							success: false, message: "Multiple room names"
						})
					}
					else {db.getRoom.insertOne({name:roomName, points:points, capacity:capacity},(error,result)=>{
                        console.log("completed");
						res.send({ 
							success: true, message: "Completed"
						})
					})}
				})
				}
            catch (error) {
		console.log(error)
		res.status(500).send({ success: false, message: 'Internal server error' })
	}
	
})
module.exports = router;
