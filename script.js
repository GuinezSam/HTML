//assign canvas tag to canvas object in javascript
var canvas = document.querySelector('canvas');

//set canvas size to whole window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//ctx (context class)
var context = canvas.getContext('2d');

//fillRect(x,y,width height)

context.fillStyle = 'rgba(0,255,0,0.5)';
context.fillRect(50, 50, 100, 100);
//works like topdown excecution Ex.:
context.fillStyle = 'rgba(255,255,0,0.5)';
context.fillRect(50, 250, 100, 100);

context.beginPath();
//.moveTo(x,y);, moves to point in canvas
context.moveTo(50, 300);
context.lineTo(300, 100);
//linTo() is repeatable thus drawing
context.lineTo(400, 300);

//.strokeStyle can be rgb #hexvalue or rgba()
context.strokeStyle = 'blue';
//stroke starts draw process
context.stroke();

//arc /circe
//start new path
context.beginPath();
context.arc(300, 300, 30, 0, Math.PI * 2, false);
context.strokeStyle = 'red';
context.stroke();
