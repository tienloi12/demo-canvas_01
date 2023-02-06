let canvas = document.getElementById("myCanvas");

/**
 * 
 * @param {any} canvas 
 * @returns {CanvasRenderingContext2D}
 */
function createPaper(canvas) {
    return canvas.getContext("2d");
}
let paper = createPaper(canvas);

let currentTime = Date.now();
let veloccityX = 100;
let circleX = canvas.width / 2;
let circleY = canvas.height / 2;
let omega = 1;


var imgPath = "./hinhnen.jpg";
var imgObj = new Image();
imgObj.src = imgPath;





let isEyesOpen = false;
let isTeeth = false;
setInterval(() => {
    let delta = (Date.now() - currentTime) / 1000;
    let fps = 1 / delta;
    currentTime = Date.now();
    paper.clearRect(0, 0, canvas.width, canvas.height);
    console.log("FPS: " + Math.floor(fps));
    //draw
    paper.beginPath();
    paper.strokeStyle = "yellow";
    paper.fillStyle = "yellow";
    paper.arc(circleX / 2, circleY / 2, 180, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();

    if (isEyesOpen == true) {
        isEyesOpen = false;
        //left eye
        paper.beginPath();
        paper.fillStyle = "brown";
        paper.arc(180, 230, 45, 0, 2 * Math.PI);
        paper.fill();

        paper.beginPath();
        paper.fillStyle = "black";
        paper.arc(180, 230, 20, 0, 2 * Math.PI);
        paper.fill();

        //right eye
        paper.beginPath();
        paper.fillStyle = "red";
        paper.arc(360, 230, 45, 0, 2 * Math.PI);
        paper.fill();

        paper.beginPath();
        paper.fillStyle = "black";
        paper.arc(360, 230, 20, 0, 2 * Math.PI);
        paper.fill();

        paper.beginPath();
        paper.fillStyle = "white";
        paper.arc(270, 340, 90, 0, 1 * Math.PI);
        paper.fill();

    } else {
        isEyesOpen = true;
        //left eye


        paper.beginPath();
        paper.fillStyle = "black";
        paper.arc(180, 230, 20, 0, 1 * Math.PI);
        paper.fill();

        paper.beginPath();
        paper.fillStyle = "brown";
        paper.arc(180, 230, 45, 0, 1 * Math.PI);
        paper.fill();

        paper.beginPath();
        paper.fillStyle = "yellow";
        paper.strokeStyle = "black";
        paper.arc(180, 230, 45, 0, 1 * Math.PI);
        paper.fill();
        paper.stroke();
        paper.lineWidth = 12

        //right eye


        paper.beginPath();
        paper.fillStyle = "black";
        paper.arc(360, 230, 20, 0, 1 * Math.PI);
        paper.fill();

        paper.beginPath();
        paper.fillStyle = "red";
        paper.arc(360, 230, 45, 0, 1 * Math.PI);
        paper.fill();

        paper.beginPath();
        paper.fillStyle = "yellow";
        paper.strokeStyle = "black";
        paper.arc(360, 230, 45, 0, 1 * Math.PI);
        paper.fill();
        paper.stroke();

        paper.beginPath();
        paper.fillStyle = "red";
        paper.arc(270, 340, 60, 0, 1 * Math.PI);
        paper.fill();

        paper.beginPath();
        paper.fillStyle = "red";
        paper.moveTo(75, 40);
        paper.bezierCurveTo(75, 37, 70, 25, 50, 25);
        paper.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        paper.bezierCurveTo(20, 80, 40, 102, 75, 120);
        paper.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        paper.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        paper.bezierCurveTo(85, 25, 75, 37, 75, 40);
        paper.fill();

        imgObj.onload = function(){
            context.drawImage(imgObj,200,100);
        }

    }

}, 1000);