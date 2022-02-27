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