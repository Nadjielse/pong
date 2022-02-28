const canvas = document.getElementById("pong");
canvas.width = parseInt(window.getComputedStyle(canvas).getPropertyValue("width"));
canvas.height = parseInt(window.getComputedStyle(canvas).getPropertyValue("height"));
const ctx = canvas.getContext("2d");

//Main code

const player1 = new Racket(1);
const player2 = new Racket(2);
let ballOwner = randomizeBallOwner();
let ball = new Ball();

let objs = [player1, player2, ball];



function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background();
    handleCollisions();
    handlePoints();
    if(ballOwner) {
        ball = new Ball();
        objs[2] = ball;
    }
    moveObjs();
    drawObjs();
    drawPoints();

    requestAnimationFrame(loop);
}
loop();