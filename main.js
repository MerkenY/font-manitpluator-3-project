rightWristX = 0;
leftWristX = 0;
difference =0;
function setup(){

canvas = createCanvas(500,500);
canvas.center();


video = createCapture(VIDEO);
video.size(500,500);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', GotPoses);
}

function modelLoaded(){

console.log("poseNet is loaded")

}

function GotPoses(results){

if(results.length > 0)
{
console.log(results);

leftWristX= results[0].pose.leftWrist.x;
rightWrist= results[0].pose.rightWrist.x;

difference = floor(leftWristX - rightWristX);
}


}

function draw(){

background('#4d67db');
textSize(difference);
fill("#bdc3de");
text("Merken", 100, 100);



}