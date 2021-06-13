import React from 'react';
import './Player.css';
class Player extends React.Component {

    render() {
        return (
            <div class="player">
                <div class="information">
                    <strong>QUICK PLAY</strong>
                    <div class="avatar">
                        <div class="ava ava-img">
                        </div>
                        <button class="ava-select"><i class="fas fa-pencil-alt"></i></button>
                    </div>
                    <div class="form">
                        <div class="username">
                            <span><i class="far fa-user"></i></span>
                            <strong>NICKNAME:</strong>
                            <label class="text">
                                <input type="text" value="" maxlength="20"
                                    style={{fontFamily:"'Muli', sans-serif",fontWeight:"bold"}} />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="action">
                    <button class="btn-room">
                        <span><i class="fas fa-door-open"></i></span>
                        <strong>Room</strong>
                    </button>
                    <button class="btn-play">
                        <span><i class="fas fa-gamepad"></i></span>
                        <strong>Play</strong>
                    </button>
                    <button class="btn-draw">
                        <span><i class="fas fa-paint-brush"></i></span>
                        <strong>Draw!</strong>
                    </button>
                </div>
            </div>
        )
    }
}
export default Player