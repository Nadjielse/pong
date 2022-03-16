const canvas = document.getElementById("pong");
canvas.width = parseInt(window.getComputedStyle(canvas).getPropertyValue("width"));
canvas.height = parseInt(window.getComputedStyle(canvas).getPropertyValue("height"));
const ctx = canvas.getContext("2d");

const tileSize = Math.round(canvas.height / 22);
const PointsToWin = 10;
const StrongStrikeGap = tileSize * 2;

//Main code

let winner = null;
const player1 = new Racket(1);
const player2 = new Racket(2);
let ballOwner = randomizeBallOwner();
let ball = new Ball();

let objs = [player1, player2, ball];



function loop() {
    //Refresh screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background();
    
    //Game flow
    if(!winner) {
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
    else {
        displayVictory();
    }
}
loop();