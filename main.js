var mouseEvent=""
var last_position_of_x, last_position_of_y
var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
var color="black"
var width="1"
canvas.addEventListener("mousedown", my_mousedown); 

function my_mousedown(e) 
{ mouseEvent = "mouseDown"; }
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    var current_position_x=e.clientX-canvas.offsetLeft
    var current_position_y=e.clientY-canvas.offsetTop
    if (mouseEvent=="mouseDown")
    {
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width
        ctx.arc(current_position_x, current_position_y, 25, 0, 2*Math.PI)
        ctx.stroke()
    }
    last_position_of_x=current_position_x
    last_position_of_y=current_position_y
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
 { mouseEvent = "mouseUP"; } 
 canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) 
{ mouseEvent = "mouseleave"; }