function collision(obj1, obj2) {
    let tCol = obj2.y + obj2.height - obj1.y;
    let rCol = obj1.x + obj1.width - obj2.x;
    let bCol = obj1.y + obj1.height - obj2.y;
    let lCol = obj2.x + obj2.width - obj1.x;

    if(tCol < 0 || rCol < 0 || bCol < 0 || lCol < 0) {
        return null;
    }

    if(tCol == Math.min(tCol, rCol, bCol, lCol)) {
        return "top";
    }
    if(rCol == Math.min(tCol, rCol, bCol, lCol)) {
        return "right";
    }
    if(bCol == Math.min(tCol, rCol, bCol, lCol)) {
        return "bottom";
    }
    if(lCol == Math.min(tCol, rCol, bCol, lCol)) {
        return "left";
    }
}

function handleCollisions() {
    if(!ball.moving) {
        return;
    }

    //Ball boundary collisions
    if(ball.y <= 0) {
        ball.vSpeed *= -1;
    }
    if(ball.y >= canvas.height - ball.height) {
        ball.vSpeed *= -1;
    }

    //Ball & player horizontal collision
    if(collision(ball, player1) == "right") {
        ball.hSpeed *= -1;

        if(ball.vSpeed > 0) {
            if(player1.movingDown) ball.vSpeed *= 1.2;
            if(player1.movingUp) ball.vSpeed *= -0.9;
        }
        if(ball.vSpeed < 0) {
            if(player1.movingDown) ball.vSpeed *= -0.9;
            if(player1.movingUp) ball.vSpeed *= 1.2;
        }
    }
    if(collision(ball, player2) == "left") {
        ball.hSpeed *= -1;

        if(ball.vSpeed > 0) {
            if(player2.movingDown) ball.vSpeed *= 1.2;
            if(player2.movingUp) ball.vSpeed *= -0.9;
        }
        if(ball.vSpeed < 0) {
            if(player2.movingDown) ball.vSpeed *= -0.9;
            if(player2.movingUp) ball.vSpeed *= 1.2;
        }
    }

    //Ball & player vertical collision
    if(collision(ball, player1) == "top") {
        if(ball.vSpeed < 0) ball.vSpeed *= -1;
        if(player1.isMoving()) ball.vSpeed *= 2;
    }
    if(collision(ball, player1) == "bottom") {
        if(ball.vSpeed > 0) ball.vSpeed *= -1;
        if(player1.isMoving()) ball.vSpeed *= 2;
    }
    if(collision(ball, player2) == "top") {
        if(ball.vSpeed < 0) ball.vSpeed *= -1;
        if(player2.isMoving()) ball.vSpeed *= 2;
    }
    if(collision(ball, player2) == "bottom") {
        if(ball.vSpeed > 0) ball.vSpeed *= -1;
        if(player2.isMoving()) ball.vSpeed *= 2;
    }
}