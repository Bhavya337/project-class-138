rightwristY=0;
rightwristX=0;
scorerightwrist=0;
game_status="";

function setup() {
   var  canvas = createCanvas(700,600);
    canvas.position(500,270);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(700,600);
    video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

  function preload() {
    missedwav = loadSound("missed.wav");
   ball.touch= loadSound("ball_touch_paddel.wav");


}


function modelLoaded(){
    console.log('poseNet is intilazied')
}


function draw(){
    background(0);
    image(video,0,0,700,600);

}

function draw(){

    background(0); 
    image(video, 0, 0, 700, 600);
  
    fill("black");
    stroke("black");
    rect(680,0,20,700);
  
    fill("black");
    stroke("black");
    rect(0,0,20,700);}
    
function startGame()
{
  game_status = "start";
  document.getElementById("status").innerHTML = "Game Is Loading";
}


function gotPoses(results)
{
  if(results.length > 0)
  {

    rightWristY = results[0].pose.rightWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }
}
