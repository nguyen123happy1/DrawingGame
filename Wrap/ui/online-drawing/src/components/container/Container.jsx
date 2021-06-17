import React from 'react';
import Board from '../board/Board';
import Chat from '../chat/Chat';

import './style.css';

// Screen

const Container = () => 
{
    const [color, setColor] = useState('black');
    const [size, setSize] = useState("5");

    useEffect(() => {
        import('./index')
      },[]);

    return (
        <>
            <div className="container">
                {/* USER'S SCREEN WHEN PLAYING */}
                <div className="screen">
                    {/* AREAS: USER-TOOLS, CHAT-BOX, BOARD */}
                    <div className="areas">
                        <div className="user">

                        </div>
//                         <div class="tools-section">
//                             <div className="color-picker-container">
//                                 Select Brush Color : &nbsp; 
//                                 <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
//                             </div>
//                             <div className="brushsize-container">
//                                 Select Brush Size : &nbsp; 
//                                 <select value={size} onChange={e => setSize(e.target.value)}>
//                                     <option> 5 </option>
//                                     <option> 10 </option>
//                                     <option> 15 </option>
//                                     <option> 20 </option>
//                                     <option> 25 </option>
//                                     <option> 30 </option>
//                                 </select>
//                             </div>
//                         </div>
                        {/* BOARD */}
                        <div class="board-container">
                            <Board color={color} size={size}></Board>
                        </div>

                        {/* Chat Box */}
                        <div className="chat-box">
                            <Chat></Chat>
                        </div>
                    </div>
                </div>
                <canvas id="canvas1"></canvas>
            </div>
        </>
    )

}

export default Container
