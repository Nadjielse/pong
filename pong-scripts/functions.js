function randomizeSignal() {
    const rNum = parseInt(Math.random() * 10) % 2;
    if(rNum == 0) return 1;
    else return -1;
}

function randomizeBallOwner() {
    return parseInt(Math.random() * 10) % 2 + 1;
}

function background() {
    ctx.fillStyle = "rgb(50, 50, 50)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function moveObjs() {
    for(const obj of objs) {
        obj.move();
    }
}

function drawObjs() {
    for(const obj of objs) {
        obj.draw();
    }
}

function displayVictory() {
    ctx.fillStyle = "rgb(200, 200, 200)";
    ctx.font = "50px 'Segoe UI'";
    const winText = `Player${winner.player} Won!`;
    ctx.fillText(winText, canvas.width / 2 - ctx.measureText(winText).width / 2, canvas.height / 2);

    ctx.font = "30px 'Segoe UI'";
    const playAgain = "Press f5 to play again";
    ctx.fillText(playAgain, canvas.width / 2 - ctx.measureText(playAgain).width / 2, canvas.height - 30 * 3);
}