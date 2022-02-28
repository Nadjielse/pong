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