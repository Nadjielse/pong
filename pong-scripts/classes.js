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
    /*
    move() {
        if(this.moving == false && this.x + this.width == player1.x) {
            if(keys.ArrowLeft) {
                this.vSpeed = parseInt(Math.random() * 10) % 5 + 6;
                if(player1.movingUp) this.vSpeed *= -1;
                if(!player1.isMoving()) this.vSpeed *= -1;
                this.hSpeed = -3;
                this.moving = true;
            }
        }
        if(this.moving == false && this.x == player2.x + player2.width) {
            if(keys.KeyD) {
                this.vSpeed = parseInt(Math.random() * 10) % 5 + 6;
                if(!player2.isMoving()) this.vSpeed *= -1;
                if(player2.movingUp) this.vSpeed *= -1;
                this.hSpeed = 3;
                this.moving = true;
            }
        }

        if(this.y <= 0) {
            this.vSpeed *= -1;
        }
        if(this.y >= canvas.height - this.height) {
            this.vSpeed *= -1;
        }

        this.y += this.vSpeed;
        this.x += this.hSpeed;
    }
    */
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

    move() {
        if(this.player == 1) {
            if(keys.ArrowUp && this.y > 0) {
                this.y -= this.speed;
            }
            if(keys.ArrowDown && this.y < canvas.height - this.height) {
                this.y += this.speed;
            }
        }
        if(this.player == 2) {
            if(keys.KeyW && this.y > 0) {
                this.y -= this.speed;
            }
            if(keys.KeyS && this.y < canvas.height - this.height) {
                this.y += this.speed;
            }
        }
    }

    isMoving() {
        if(this.movingUp || this.movingDown) return true;
        else return false;
    }
}