const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    KeyW: false,
    KeyS: false,
    KeyD: false
};

function manageKeyDown(e) {
    switch(e.code) {
        case "ArrowUp":
            keys.ArrowUp = true;
            player1.movingUp = true;
            break;
        case "ArrowDown":
            keys.ArrowDown = true;
            player1.movingDown = true;
            break;
        case "ArrowLeft":
            keys.ArrowLeft = true;
            if(ball.hSpeed > 0) {
                if(typeof(collision(ball, player1)) == "number" && collision(ball, player1) >= -25) {
                    player1.strongStrike = true;
                }
            }
            break;
        case "KeyW":
            keys.KeyW = true;
            player2.movingUp = true;
            break;
        case "KeyS":
            keys.KeyS = true;
            player2.movingDown = true;
            break;
        case "KeyD":
            keys.KeyD = true;
            if(ball.hSpeed < 0) {
                if(typeof(collision(ball, player2)) == "number" && collision(ball, player2) <= 25) {
                    player2.strongStrike = true;
                }
            }
    }
}

function manageKeyUp(e) {
    switch(e.code) {
        case "ArrowUp":
            keys.ArrowUp = false;
            player1.movingUp = false;
            break;
        case "ArrowDown":
            keys.ArrowDown = false;
            player1.movingDown = false;
            break;
        case "ArrowLeft":
            keys.ArrowLeft = false;
            break;
        case "KeyW":
            keys.KeyW = false;
            player2.movingUp = false;
            break;
        case "KeyS":
            keys.KeyS = false;
            player2.movingDown = false;
            break;
        case "KeyD":
            keys.KeyD = false;
    }
}