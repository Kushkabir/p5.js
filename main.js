function preload(){

}
function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video,50,50,540,380);
tint(tint_color);
fill(0,128,0);
stroke(0,0,255);
circle(30,30,20);
fill(0,128,0);
stroke(0,0,255);
circle(610,30,20);
fill(0,128,0);
stroke(0,0,255);
circle(610,450,20);
fill(0,128,0);
stroke(0,0,255);
circle(30,450,20);
fill(255,0,0);
stroke(255,0,0);
rect(40,450,560,10);
fill(255,0,0);
stroke(255,0,0);
rect(40,30,560,10);
fill(255,0,0);
stroke(255,0,0);
rect(30,40,10,400);
fill(255,0,0);
stroke(255,0,0);
rect(600,40,10,400);
fill(255,0,0);
stroke(255,0,0);
}
function takesnapshot(){
    save("student_kush.png");
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}
