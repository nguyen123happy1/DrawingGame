import React from 'react';
import Login from '../login/Login';
import Player from '../player/Player';
import './Playground.css';

import axios from 'axios'
// import { WindowsFilled } from '@ant-design/icons';

class Playground extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username : '',
          password : '',
        }
    
        this.onchangeUsername=this.onchangeUsername.bind(this);
        this.onchangePassword=this.onchangePassword.bind(this);
        this.submit=this.submit.bind(this);
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
            axios.post('http://localhost:5000/user/register',{sendUser}).then(res=>{
              if (res.data.success == false) {
                  console.log(res.data.message);
                  //alert here, message available in res.data.message
              }
              else window.location.href = '/login';
            })
      }

    render() {
        return (

            <div className="playground">
                <div className="title">
                    <span class="title-image">
                        <h2>
                            PLAY
                        </h2>
                    </span>
                </div>

                <div class="playground_content home">

                        {/* <Player/> */}

                        {/* <div class="container"> */}
                          {/* <div class="register"> */}
                            <form onSubmit={this.submit}>
                              <h1>Register</h1>
                              {/* <p>Create an account to join this game</p> */}
                              <hr/>
                          
                              <b>Username</b>
                              <input type="text" placeholder="Enter Username" name="username" id="username" value={this.state.username} onChange={this.onchangeUsername} required/>
                          
                              <b>Password</b>
                              <input type="password" placeholder="Enter Password" name="password" id="password" value={this.state.password} onChange={this.onchangePassword} required/>
                          
                                  <hr></hr>
                              <button type="submit" class="registerbtn">Register</button>
                            </form>
                          {/* </div> */}
                        {/* </div> */}

                        <div class="or">
                            <span class="vertical-line"></span>
                            <div class="circle">
                                <div class="circle-txt">
                                    <b>OR</b>
                                </div>
                            </div>
                            <span class="vertical-line"></span>
                        </div>

                        <Login/>
                  </div>
                </div>


        )
    }
}
export default Playground