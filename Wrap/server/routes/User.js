const express = require('express');
const router = express.Router();
const db = require('../config/db');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/',(req,res)=>res.send('User Route'))

router.post('/login', jsonParser, (req, res) => {
	
	username = req.body.sendUser.username;
	password = req.body.sendUser.password;
	console.log("Username: "+ username + " Password: "+password)

	// Simple validation
	if (!username || !password)
		return res
			.status(400)
			.send({ success: false, message: 'Missing username and/or password' })

    else try {
				db.getUser.findOne({username: username, password:password}).then(data => {
					if (data){
						console.log("Signin successfull")
						res.send({
							success: true, message: "Signin successful",data: data
						})
					}
					else {console.log("Wrong")
						res.send({
						success: false, message: "Wrong username or password",data: data
					})}
				})
				}
            catch (error) {
		console.log(error)
		res.status(500).send({ success: false, message: 'Internal server error' })
	}
	
})
module.exports = router;
