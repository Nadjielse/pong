const canvas = document.getElementById("pong");
canvas.width = parseInt(window.getComputedStyle(canvas).getPropertyValue("width"));
canvas.height = parseInt(window.getComputedStyle(canvas).getPropertyValue("height"));
const ctx = canvas.getContext("2d");

//Main code

function background() {
    ctx.fillStyle = "rgb(50, 50, 50)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const player1 = new Racket(1);
const player2 = new Racket(2);
const ball = new Ball();

let ballOwner = parseInt(Math.random() * 10) % 2 + 1;
if(ballOwner == 1) {
    ball.x = player1.x - ball.width;
    ball.y = player1.y + player1.height / 3;
}
else {
    ball.x = player2.x + player2.width;
    ball.y = player2.y + player2.height / 3;
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background();
    player1.move();
    player2.move();
    //ball.move();
    player1.draw();
    player2.draw();
    ball.draw();
    requestAnimationFrame(loop);
}
loop();

window.onkeydown = manageKeyDown;

window.onkeyup = manageKeyUp;