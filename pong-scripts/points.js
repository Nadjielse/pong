function handlePoints() {
    if(ball.x + ball.width < 0) {
        player1.points++;
        ballOwner = 1;
    }
    if(ball.x > canvas.width) {
        player2.points++;
        ballOwner = 2;
    }
}

function drawPoints() {
    ctx.font = "50px 'Segoe UI'";
    ctx.fillText((player2.points).toString(), 10, 50);
    ctx.fillText((player1.points).toString(), canvas.width - 40, 50);
}