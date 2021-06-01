import React from 'react';
import Board from '../board/Board';
import Chat from '../chat/Chat';

import './style.css';

// Screen

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5"
        }
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

    render() {

        return (
            <div className="container">
                {/* USER'S SCREEN WHEN PLAYING */}
                <div className="screen">
                    {/* AREAS: USER-TOOLS, CHAT-BOX, BOARD */}
                    <div className="areas">
                        <div className="user">

                        </div>
                        {/* <div class="tools-section">
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
                        <div class="board-container">
                            <Board color={this.state.color} size={this.state.size}></Board>
                        </div>

                        {/* Chat Box */}
                        <div className="chat-box">
                            <Chat></Chat>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container