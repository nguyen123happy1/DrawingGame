import React from 'react';
import io from 'socket.io-client';
import 'antd/dist/antd.css';
import './style.css';
import {InfoCircleTwoTone} from '@ant-design/icons';
import { Button, Input} from 'antd';
import formatMessage from '../user/user.js';

class Chat extends React.Component {

    socket = io.connect("http://localhost:3000");

    componentDidMount() {
        const script = document.createElement("script");

        script.src = '/socket.io/socket.io.js';
        script.async = true;

        document.body.appendChild(script);
        this.getMessage();
    }

    getMessage() {
        var form = document.getElementById('form');
        var input = document.getElementById('input');
        var messages = document.getElementById('messages');
        var keyword = "kw";

        // When press enter or click Send button:
        form.addEventListener('submit', (e) => {
            
            //MUST DELETE
            // var item = document.createElement('li');
            // item.classList.add('userMess');
            // item.textContent = input
            // messages.appendChild(item);
            // window.scrollTo(0, document.body.scrollHeight);


            e.preventDefault();
            if (input.value)  {
                this.socket.emit('chat message', formatMessage('USER', input.value) );
                input.value = '';
            }
        });
        
        this.socket.on('chat message', function(msg){
            var item = document.createElement('li');
            item.classList.add('userMess');
            item.textContent = msg.username + ': ' + msg.text ;
            messages.appendChild(item);
            messages.scrollTop = messages.scrollHeight;

            // Check if input == keyword
            if(msg == keyword){
                input.disabled = 'true';
            }
        });

        // this.socket.on('disconnect', function() {
        //     var item = document.createElement('li');
        //     item.classList.add('userMess');
        //     item.textContent = "A user has left";
        //     messages.appendChild(item);
        //     window.scrollTo(0, document.body.scrollHeight);
        // });
        
    }

    render() {
        return (
            <div className = "chat">

                <ul id="messages">
                    <li> <p style={{color:'rgb(64, 159, 214)'}}> <InfoCircleTwoTone/> Welcome user </p> </li>
                </ul>  

                <form id="form" action="">
                    <Input id='input' placeholder='Answer here...' autoComplete='off' />
                </form>

            </div>
        )
    }
}

export default Chat