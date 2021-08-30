function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(650, 95);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
}

function modelLoaded() {
    console.log("PoseNet has initialized!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}