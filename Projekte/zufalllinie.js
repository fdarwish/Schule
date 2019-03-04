var canvas = document.querySelector("canvas");

var width = window.innerWidth;

var height = window.innerHeight;

canvas.width = width;
canvas.height = height;

var c = canvas.getContext("2d"); 

c.lineWidth = 2;

var lastX = Math.random()*width;
var lastY = Math.random()*height;

function drawLine() { 


var x = Math.random()*width;
var y = Math.random()*height;

c.beginPath();
c.moveTo(lastX, lastY);
c.lineTo(x, y);
c.stroke();

lastX = x ;
lastY = y ;

var r = Math.random()*255;    
var g = Math.random()*255; 
var b = Math.random()*255;                                                                                                                                        
c.fillStyle = "rgb( "+r+","+g+","+b+" )";
c.fill();

//zufällige Frabe
var r = Math.random()*255;    
var g = Math.random()*255; 
var b = Math.random()*255;                                                                                                                                        
c.strokeStyle = "rgb( "+r+","+g+","+b+" )";
c.stroke();




}

//ruft eine Funktion immer wieder auf (Intervall in Millisekunde)
setInterval(drawLine, 50);