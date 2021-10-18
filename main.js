var shape;

canvas = document.getElementById("easel");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 8;

ctx.beginPath();
ctx.strokeStyle = "blue"; 
ctx.lineWidth = 8;
ctx.arc(300,200,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 8; 
ctx.arc(350,250,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 8; 
ctx.arc(400,200,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 8; 
ctx.arc(450,250,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 8; 
ctx.arc(500,200,100,0,2*Math.PI);
ctx.stroke();