import React from 'react';
import './Login.css';
import axios from 'axios'
class Login extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      username : '',
      password : '',
      loggedIn: false

    }

    this.onchangeUsername=this.onchangeUsername.bind(this);
    this.onchangePassword=this.onchangePassword.bind(this);
    this.submit=this.submit.bind(this);
    this.logout=this.logout.bind(this);
  }

  onchangePassword(e){
    this.setState({password: e.target.value})
  }
  onchangeUsername(e){
    this.setState({username: e.target.value})}

  submit(e){
    const sendUser = {
      username:this.state.username,
      password:this.state.password
    }
    axios.post('http://localhost:5000/user/login',{sendUser})
    .then(res => {
      // console.log(res);
      // console.log(res.data);
      // console.log(res.data.data);
      this.setState({loggedIn: res.data.success})
      
        if (this.state.loggedIn==true){
          localStorage.setItem("user_id",res.data.data._id);
          localStorage.setItem("name",res.data.data.name);
          console.log(localStorage.getItem("name"));
          window.location.href= "/roomscreen";
        }
      
    })
    e.preventDefault()
  }
  logout(e){
    localStorage.removeItem("user_id");
    localStorage.removeItem("name");
    this.setState({loggedIn: false});
  }

  

  render() {
     if (this.state.loggedIn==false) return (
      <div class="login">
        <div class="login-title">
          <div id="welcome" style={{ color: "black", textAlign: "center" }}><strong>LOGIN WITH YOUR ACCOUNT</strong></div><br />
          <div id="form">
            <form class="login_form" name="login" onSubmit={this.submit}>
              <p>Username</p>
              <input type="text" name="username" value={this.state.username} onChange={this.onchangeUsername}/>
              <p>Password</p>
              <input type="password" name="password"value={this.state.password} onChange={this.onchangePassword} /> <br />
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
    else return(<div class="login"><button onClick={this.logout}>Log Out</button></div>)
  }

}

export default Login