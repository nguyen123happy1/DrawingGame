import React from 'react';
import io from 'socket.io-client';

import './style.css';

class Board extends React.Component {

    timeout;
    // connect to port 3000
    socket = io.connect("http://localhost:3000");


    ctx;
    role;
    isDrawing = false;

    constructor(props) {
        super(props);

        this.socket.on("canvas-data", function(data){

            var root = this;
            var interval = setInterval(function(){
                if(root.isDrawing) return;
                root.isDrawing = true;
                clearInterval(interval);
                var image = new Image();
                var canvas = document.querySelector('#board');
                var ctx = canvas.getContext('2d');
                image.onload = function() {
                    ctx.drawImage(image, 0, 0);

                    root.isDrawing = false;
                };
                image.src = data;
            }, 200)
        })
    }

    // window.onload

    componentDidUpdate(prevProps) {
        console.log("method called");
        console.log(`Previous Properties is ${prevProps.role}`);
        this.drawOnCanvas(this.props.role);
    }


    // Draw

    drawOnCanvas(currentProps) {
        var canvas = document.querySelector('#board');
        this.ctx = canvas.getContext('2d');
        var ctx = this.ctx;

        var sketch = document.querySelector('#sketch');
        var sketch_style = getComputedStyle(sketch);
        canvas.width = parseInt(sketch_style.getPropertyValue('width'));
        canvas.height = parseInt(sketch_style.getPropertyValue('height'));
        var bounds = canvas.getBoundingClientRect();

        var mouse = {x: 0, y: 0};
        var last_mouse = {x: 0, y: 0};

        /* Mouse Capturing Work (Get mouse position on canvas) */
        canvas.addEventListener('mousemove', function(e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;

            mouse.x = e.pageX - bounds.left - window.scrollX;
            mouse.y = e.pageY - bounds.top - window.scrollY;

            mouse.x /= bounds.width; 
            mouse.y /= bounds.height; 

            mouse.x *= canvas.width;
            mouse.y *= canvas.height;
        }, false);


        /* Drawing on Paint App */
        ctx.lineWidth = this.props.size;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = this.props.color;

        console.log(`drawOnCanvas: ${currentProps}`);

        if ((currentProps === "user-drawing") ){
            canvas.addEventListener('mousedown', function(e) {
                canvas.addEventListener('mousemove', onPaint, false);
            }, false);

            canvas.addEventListener('mouseup', function() {
                canvas.removeEventListener('mousemove', onPaint, false);
            }, false);
            console.log("You are able to draw!");
        } else {
            console.log("You are not allowed to draw!");
        }

        var root = this;
        var onPaint = function() {
            ctx.beginPath();
            ctx.moveTo(last_mouse.x, last_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();

            if(root.timeout !== undefined) clearTimeout(root.timeout);
            root.timeout = setTimeout(function(){
                var base64ImageData = canvas.toDataURL("image/png");
                root.socket.emit("canvas-data", base64ImageData);
            }, 500)
        };
    }

    // Create board
    render() {
        return (
            <div className="sketch" id="sketch">
                <canvas className="board" id="board"></canvas>
            </div>
        )
    }
}

export default Board
