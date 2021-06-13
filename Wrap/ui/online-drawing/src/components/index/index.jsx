import React from 'react';
import Playground from './playground/Playground';
import './index.css';

class Index extends React.Component{

    render(){
        return (
            <div class="wrapper">
                <div class="content">
                <header>
                <div class="getApp">
                  <h4>DOWNLOAD</h4>
                  <span>
                    <a href="" style={{marginRight: "15px"}}><i class="fab fa-google-play"></i>
                      <p>Android</p>
                    </a>
                    <a href="" style={{marginLeft: "15px"}}><i class="fab fa-apple"></i>
                      <p>IOS</p>
                    </a>
                  </span>
                </div>
                <div class="logo">
                  <img src="https://cdn.glitch.com/15416f45-3c2a-4cd3-81d9-bbd5a79b3b0b%2Ffly-boy.png?v=1619968231155"
                    alt="Girl in a jacket"/>
                </div>
                <div class="update">
                  <h4>PREVIOUS UPDATE</h4>
                <span><a href="" style={{marginRight: "15px"}}><i class="fas fa-caret-right"></i>
                      <p>New Game: Drawing</p>
                    </a></span>
        
                </div>
              </header>
        
              <Playground></Playground>
              <footer>
                <a href="nguyen.glitch.me" class="draw-icon"></a>
                <nav>
                  <a href="">
                    TERMS</a>
                  <a href="" class="symbol">
                    CONDITIONS</a>
                  <a href="" class="symbol">
                    PRIVACY</a>
                  <a href="" class="symbol">
                    THANKS</a>
                  <a href="" class="symbol">
                    CONTACT</a>
                </nav>
                <div class="follow">
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                  <a href=""><i class="fab fa-twitter"></i></a>
                  <a href=""><i class="fab fa-youtube"></i></a>
                  <a href=""><i class="fab fa-instagram"></i></a>
                  <a href=""><i class="fab fa-discord"></i></a>
                </div>
              </footer>
            </div>
            <canvas id="canvas1"></canvas>
            </div>
            
          );
    }
}
export default Index