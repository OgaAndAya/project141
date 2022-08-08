rightWristX= 0;
rightWristY= 0;
scoreRightWrist=0;
game_status= " ";

function preload(){
	
}

function setup() {
	var canvas = createCanvas(700,600);
	canvas.parent("canvas");

	video=createCapture(VIDEO);
	video.size(700,600);
	video.hide();
	poseNet= ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",gotPoses);
    
}

function modelLoaded(){
console.log("Pose Net is Initialized");
}
 
function gotPoses(results){
if(results.length>0){
	rightWristX= results[0].pose.rightWrist.x;
	rightWristY= results[0].pose.rightWrist.y;
	scoreRightWrist= results[0].pose.keyPoints[10].score;

}
}

function start_game(){
	game_status="start";
	document.getElementById("status").innerHTML= "Game is Loaded";
}

function draw(){
	if(game_status=="start"){
		background(0);
		image(video,0,0,700,600);

		fill("black");
		stroke("black");
		rect(0,0,20,700);

		if(scoreRightWrist>0.2){
			fill("red");
			stroke("red");
			circle(rightWristX,rightWristY,30);
		}
	
		
	}
}






