import React from 'react';
import Login from '../login/Login';
import Player from '../player/Player';
import './Playground.css';

class Playground extends React.Component {

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

                        <Player/>

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