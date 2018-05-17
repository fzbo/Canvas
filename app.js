//SIMPLE APP ALLOWING USER TO DRAW ON CANVAS WITH VANILLA JS ONLY
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
//SETTING THE START AND ENDPOINT OF LINE
let isDrawing = false;
let lastX = 0;
let lastY = 0;

//DRAW FUNCTION WILL BE CALLED WHENEVER MOUSE IS MOVED ON TOP OF CANVAS
function draw(e){
    console.log(e);
}

canvas.addEventListener('mousemove', draw);


