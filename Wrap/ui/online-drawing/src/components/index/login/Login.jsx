import React from 'react';
import { useState } from 'react';
import './Login.css';
// import axios from 'axios'
// class Login extends React.Component {
//   constructor(props) {
//     super(props);
   
//     this.state = {
//       username : '',
//       password : '',
//       loggedIn:false
//     }
//     this.handleChange=this.handleChange.bind(this);
//     this.submit=this.submit.bind(this);
//   }

//   handleChange(e){
//     let name=e.target.name;
//       let value=e.target.value;
//        let data={};
//        data[name]=value;

//        this.setState(data);
//   }
//   submit(e){
//     e.preventDefault();
//     axios.post('http://localhost:5000/login',{username:this.state.username,password:this.state.password,loggedIn:this.state.loggedIn})
//     .then(response=>{
//        console.log(response.data);
//     });
//   }

  

//   render() {
//     return (
//       <div class="login">
//         <div class="login-title">
//           <div id="welcome" style={{ color: "black", textAlign: "center" }}><strong>LOGIN WITH YOUR ACCOUNT</strong></div><br />
//           <div id="form">
//             <form class="login_form" name="login" onSubmit={this.onSubmit}>
//               <p>Username</p>
//               <input type="text" name="user" onChange={this.onChangeUsername}/>
//               <p>Password</p>
//               <input type="password" name="pass"onChange={this.onChangePassword} /> <br />
//               <span id="error"></span><br />
//               <button type="submit">Submit</button>
//             </form>
//           </div>

//         </div>
//         <div class="options" id="options">

//         </div>
//         <div class="login-choice">

//         </div>
//       </div>
//     )
//   }

// }
class Login extends React.Component {
  constructor(props) {
    super(props);
   
  }

  
  

  render() {
    return (
      <div class="login">
        <div class="login-title">
          <div id="welcome" style={{ color: "black", textAlign: "center" }}><strong>LOGIN WITH YOUR ACCOUNT</strong></div><br />
          <div id="form">
            <form class="login_form" name="login">
              <p>Username</p>
              <input type="text" name="user" />
              <p>Password</p>
              <input type="password" name="pass"/> <br />
              <span id="error"></span><br />
              <button type="submit">Submit</button>
            </form>
          </div>

        </div>
        <div class="options" id="options">

        </div>
        <div class="login-choice">

        </div>
      </div>
    )
  }

}
export default Login