var app = require('express')();
const cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
require('./config/db')

const UserRouter = require('./routes/User');

io.on('connection', (socket)=> {

      console.log('User Online');
      socket.on('disconnect', () => {
            console.log('user disconnected');
      });


      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            console.log('Canvas active');
      });

      // Print messages
      socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
            io.emit('chat message', msg);
      });

})
app.use(bodyParser.json());
app.use(cors());
app.use("/user", UserRouter);


// app.get("/login", (req, res) => {
//       if (req.session.user) {
//         res.send({ loggedIn: true, user: req.session.user });
//       } else {
//         res.send({ loggedIn: false });
//       }
//     });
// app.post("/login",(req,res)=>{
//       var user = req.body.username;
//       var pass = req.body.password;
//       var loggedin =req.body.loggedIn;
//       var find_user = db.collection('user_table').findOne({username: user, password:pass}, function(err, result) {
//           if (err) {
//             res.send({err:err})
//             console.log(err);
//           } 
//           else {
//                 var user ={username: result.username,
//                   password: result.password,
//                   loggedin:true,
//                   name: result.name
//                 }
//               console.log(result);
//               res.send(user);
//           }
//           res.redirect('http://localhost:3000/index/')
//         });
//   })

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})