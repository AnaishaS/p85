canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width=150;
rover_height=180;
rover_x=10;
rover_y=10;
bg_image="valet parking.jpg";
rover_image="car.png";

function add(){
  bg_imgTag=new Image();
  bg_imgTag.onload=uploadbg;
  bg_imgTag.src=bg_image;
  rover_imgTag=new Image();
  rover_imgTag.onload=uploadrover;
  rover_imgTag.src=rover_image;
}
function uploadbg(){
    ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    if(keypress=="38"){
        up();
    }
    if(keypress=="40"){
        down();
    }
    if(keypress=="39"){
        right();
    }
    if(keypress=="37"){
        left();
    }
}

function up() {
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadbg();
        uploadrover();
    } 
}
function down() {
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadbg();
        uploadrover();
    } 
}
function left() {
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadbg();
        uploadrover();
    } 
}
function right() {
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadbg();
        uploadrover();
    } 
}