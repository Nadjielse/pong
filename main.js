class Ball {
    constructor(x, y) {
        this.width = 25;
        this.height = 25;
        this.x = x;
        this.y = y;
        this.hSpeed = 0;
        this.vSpeed = 0;
        this.moving = false;
    }

    draw() {
        ctx.fillStyle = "rgb(200, 200, 200)";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Racket {
    constructor(player) {
        this.player = player;
        this.width = 25;
        this.height = 100;

        switch(this.player) {
            case 1:
                this.x = canvas.width - this.width * 2;
                break;
            case 2:
                this.x = this.width;
        }

        this.y = canvas.height / 2 - this.height / 2;
        this.speed = 5;
        this.movingUp = false;
        this.movingDown = false;
    }

    draw() {
        ctx.fillStyle = "rgb(200, 200, 200)";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

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

window.onkeydown = manageKeyDown;

window.onkeyup = manageKeyUp;