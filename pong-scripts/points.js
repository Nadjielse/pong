function handlePoints() {
    //Add points
    if(ball.x + ball.width < 0) {
        player1.points++;
        ballOwner = 1;
    }
    if(ball.x > canvas.width) {
        player2.points++;
        ballOwner = 2;
    }

    //Win
    if(player1.points >= PointsToWin) winner = player1;
    if(player2.points >= PointsToWin) winner = player2;
}

function drawPoints() {
    ctx.fillStyle = "rgb(200, 200, 200)";
    ctx.font = "50px 'Segoe UI'";
    ctx.fillText((player2.points).toString(), 10, 50);
    ctx.fillText((player1.points).toString(), canvas.width - ctx.measureText(player1.points).width - 10, 50);
}