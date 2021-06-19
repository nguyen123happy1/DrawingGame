import React from 'react';
import Board from '../board/Board';
import Chat from '../chat/Chat';
import { Index } from './index';
import io from 'socket.io-client';

import './style.css';

// Screen

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5",
            role: ""
        }
    }

    socket = io();
    currentPlayer

    testSocket() {
        this.socket.on('player-number', num => {
            if (num === -1){
                console.log('Full');
            } else {
                if ((4 <= num && num <= 12) && (num > 0)){
                    this.changeRole("user-guessing");
                    console.log(`Your role is ${this.state.role}`);
                }
                else if ((0 <= num && num <=3)){
                    this.changeRole("user-drawing");
                    // this.makeTimer();
                    console.log(`Your role is ${this.state.role}`);
                }
            }
        })
    }

    componentDidMount() {
        Index();
        // this.testSocket();
    }

    componentWillMount() {
        this.testSocket();
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    changeRole(role) {
        this.setState({
            role: role
        })
    }

    // makeTimer(){
    //     setTimeout(() => {
    //         this.setState({
    //             role: "user-guessing"})
    //         alert("Your turn is over!");
    //     }, 20000)
    //   }

    render() {
        if (this.state.role === "user-drawing"){
            return (
                <div className="container">
                    {/* USER'S SCREEN WHEN PLAYING */}
                    <div className="screen">
                        {/* AREAS: USER-TOOLS, CHAT-BOX, BOARD */}
                        <div className="areas">
                            <div className="user">
                            </div>
                            {/* <div className="tools-section">
                                <div className="color-picker-container">
                                    Select Brush Color : &nbsp; 
                                    <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                                </div>

                                <div className="brushsize-container">
                                    Select Brush Size : &nbsp; 
                                    <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                                        <option> 5 </option>
                                        <option> 10 </option>
                                        <option> 15 </option>
                                        <option> 20 </option>
                                        <option> 25 </option>
                                        <option> 30 </option>
                                    </select>
                                </div>

                            </div> */}
                            {/* BOARD */}
                            <div className="board-container">
                                <Board color={this.state.color} size={this.state.size} role={this.state.role}></Board>
                            </div>

                            {/* Chat Box */}
                            <div className="chat-box">
                                <Chat></Chat>
                            </div>
                        </div>
                    </div>
                    <canvas id="canvas1"></canvas>
                </div>
            )
        } else {
            return (
                <div className="container">
                    {/* USER'S SCREEN WHEN PLAYING */}
                    <div className="screen">
                        {/* AREAS: USER-TOOLS, CHAT-BOX, BOARD */}
                        <div className="areas">
                            <div className="user">
                                {/* <h1>{this.state.role}</h1> */}
                            </div>
                            {/* BOARD */}
                            <div className="board-container">
                                <Board color={this.state.color} size={this.state.size} role={this.state.role}></Board>
                            </div>

                            {/* Chat Box */}
                            <div className="chat-box">
                                <Chat></Chat>
                            </div>
                        </div>
                    </div>
                    <canvas id="canvas1"></canvas>
                </div>
            )
        }
    }
}

export default Container
