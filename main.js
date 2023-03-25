leftWristX = 0;
leftWristY = 0;
rightWristX =0;
rightWristY = 0;
difference = 0;
function setup() {
    video =  createCapture(VIDEO);
    video.size(550,500);
   
    canvas = createCanvas(700,500);
    canvas.position(600 ,100 );
   
    poseNet = ml5.poseNet(video , modelLoaded );
    
    poseNet.on("pose" , gotPoses);
   }

   function draw() {
    image(video , 0 , 0 , 550 , 500)
    background('grey')
    textSize(difference);
    fill('black');
    text("hello everyone , this is the font manipulator web app" , 50, 250)
    }
    
    function preload() {
    
    }
    
    
    function modelLoaded() {
    console.log("Model has been loaded.")
    }
    
    function gotPoses(results) {
    
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        difference = floor(leftWristX - rightWristX);
    }


    }