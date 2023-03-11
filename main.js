function setup() {
    video =  createCapture(VIDEO);
    video.size(550,500);
   
    canvas = createCanvas(700,500);
    canvas.position(600 ,100 );
   
    poseNet = ml5.poseNet(video , modelLoaded );
    
    poseNet.on("pose" , gotPoses);
   }

   function draw() {
    background('grey')
    
    }
    
    function preload() {
    
    }
    
    
    function modelLoaded() {
    console.log("Model has been loaded.")
    }
    
    function gotPoses(results) {
    
    if (results.length > 0) {
        console.log(results);
    }
    }