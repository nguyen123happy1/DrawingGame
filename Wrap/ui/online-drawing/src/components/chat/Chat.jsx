import React from 'react';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';

import './style.css';

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
        // var messages = document.getElementById('messages');

        // When press enter or click Send button:
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (input.value)  {
            console.log(input.value);
            this.socket.emit('chat message', input.value);
            input.value = '';
            }
        });

        var messages = document.getElementById('messages');
        this.socket.on('chat message', function(msg){
            console.log("Mess: ",msg)
            var item = document.createElement('li');
            item.textContent = msg;
            messages.appendChild(item);
            console.log(item);
            window.scrollTo(0, document.body.scrollHeight);
            });
    }

    render() {
        return (
            <div className = "chat">
                <ul id="messages"></ul>    
                <form id="form" action="">
                    <input id="input" autocomplete="off"/>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default Chat