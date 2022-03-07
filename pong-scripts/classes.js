class Ball {
    constructor() {
        this.startSpeed = 7;
        this.width = 25;
        this.height = 25;
        if(ballOwner == 1) {
            this.x = player1.x - this.width;
            this.y = player1.y + player1.height / 2 - this.height / 2;
            ballOwner = null;
        }
        if(ballOwner == 2) {
            this.x = player2.x + player2.width;
            this.y = player2.y + player2.height / 2 - this.height / 2;
            ballOwner = null;
        }
        this.hSpeed = 0;
        this.vSpeed = 0;
        this.moving = false;
    }

    draw() {
        ctx.fillStyle = "rgb(200, 200, 200)";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        if(!this.moving && collision(this, player1) == "right") {
            //Move ball with player
            if(player1.movingUp) {
                ball.y -= player1.speed;
            }
            if(player1.movingDown) {
                ball.y += player1.speed;
            }

            //Throw ball
            if(keys.ArrowLeft) {
                this.vSpeed = (parseInt(Math.random() * 10) % 6 + 4);
                if(!player1.isMoving()) {
                    this.vSpeed *= randomizeSignal();
                }
                if(player1.movingUp) {
                    this.vSpeed *= -1;
                }
                this.hSpeed = -this.startSpeed;
                this.moving = true;
            }
        }
        if(!this.moving && collision(ball, player2) == "left") {
            //Move ball with player
            if(player2.movingUp) {
                ball.y -= player2.speed;
            }
            if(player2.movingDown) {
                ball.y += player2.speed;
            }

            //Throw ball
            if(keys.KeyD) {
                this.vSpeed = (parseInt(Math.random() * 10) % 6 + 4);
                if(!player2.isMoving()) {
                    this.vSpeed *= randomizeSignal();
                }
                if(player2.movingUp) {
                    this.vSpeed *= -1;
                }
                this.hSpeed = this.startSpeed;
                this.moving = true;
            }
        }

        //Move ball
        this.y += this.vSpeed;
        this.x += this.hSpeed;
    }
}

class Racket {
    constructor(player) {
        this.defaultSpeed = 10;
        this.points = 0;
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
        this.speed = this.defaultSpeed;
        this.movingUp = false;
        this.movingDown = false;
        this.strongStrike = false;
    }

    draw() {
        ctx.fillStyle = "rgb(200, 200, 200)";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        if(this.y <= 0 && this.movingUp) {
            this.movingUp = false;
        }
        if(this.y + this.height >= canvas.height && this.movingDown) {
            this.movingDown = false;
        }

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