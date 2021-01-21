class Game {
    constructor(canvasId) {
        let canvas = document.getElementById(canvasId);
        canvas.style.margin = 'auto';
        canvas.style.border = '#000 1px solid';
        this.ctx = canvas.getContext('2d');
        this.ctx.font = "bold 45px Arial";
        this.ctx.fillStyle = "#fff";
        this.ctx.strokeStyle = "#000"
        this.backGroundX = 0;
        this.dx = 1;
        this.backGroundimg = new Image();
        this.backGroundimg.style.width = CANVAS_WIDTH + 'px';
        this.backGroundimg.style.height = CANVAS_HEIGHT + 'px';
        this.backGroundimg.src = '../Images/background.png';

        let startButton = new Image();
        startButton.src = "../Images/start.png";

        startButton.onclick = () => {
            this.reset();
            this.init();
        }



        this.backGroundimg.onload = () => {
            this.ctx.clearRect(0, 0, canvas.height, canvas.width);
            this.ctx.drawImage(this.backGroundimg, this.backGroundX, 0, this.backGroundimg.width, this.backGroundimg.height);
            this.ctx.drawImage(startButton,230,150,200,112.5);
            this.ctx.fillText("Press Space",100,108)
            this.ctx.strokeText("Press Space",100,108)
        }
        this.checkStart = false;
        this.bestScore = 0;

        this.resetButton = new Image();
        this.resetButton.src = "../Images/restart.png";


        this.resetButton.onclick = () => {
            this.reset();
            this.init();
        }


        this.gameOverImage = new Image();
        this.gameOverImage.src = '../Images/score.png';

        this.obstacles = [];
    }

    init() {
    this.checkStart = true;

    this.bird = new Bird(this.ctx);
    wrapper.appendChild(this.resetButton);

    this.score = 0;
    let loopCounter = 0;

    this.drawLoop = setInterval(() => {
    this.draw();

    if (loopCounter % 200 === 0) {
    let obstacle = new Obstacle(this.ctx, this.dx);
    this.obstacles.push(obstacle);
    }

    if (this.bird.y >= 370) {
        clearInterval(this.drawLoop);
        this.over();
    }
    loopCounter++;
    }, 10);

    }

    draw() {
        this.drawBackground();
        this.bird.fallDown();
        this.bird.drawBird(this.ctx);
        this.obstacles.forEach((obstacle) => {
            obstacle.updateFlappy();
            this.checkCollision(obstacle);
            obstacle.drawObstacle();
            if (obstacle.x < 125 && !obstacle.isCrossed) {
                this.score += 1;
                obstacle.isCrossed = true;
            }
        })
        this.ctx.strokeText(this.score,15,40)
        this.ctx.fillText(this.score,15,40);
        if (this.obstacles.length > 0 && this.obstacles[0].x < -70) this.obstacles.splice(0, 1);
    }

    checkCollision(obstacle) {
        if (this.bird.x + this.bird.img.width > obstacle.x && this.bird.y < obstacle.y + 294 && this.bird.x < obstacle.x + 66 || this.bird.x + this.bird.img.width > obstacle.x && this.bird.y + this.bird.img.height > obstacle.y + 416 && this.bird.x < obstacle.x + 66) {
            clearInterval(this.drawLoop);
            this.over();
        }
    }

    drawBackground() {
        this.backGroundX -= this.dx;
        this.ctx.clearRect(0, 0, this.ctx.canvas.height, this.ctx.canvas.width);
        this.ctx.drawImage(this.backGroundimg, this.backGroundX, 0, this.backGroundimg.width, this.backGroundimg.height);

        if (this.backGroundX <= 0){
            this.ctx.drawImage(this.backGroundimg, this.backGroundX + this.backGroundimg.width, 0, this.backGroundimg.width, this.backGroundimg.height);
        } 

        if (this.backGroundX <= -(this.backGroundimg.width))
        {
            this.backGroundX = 0;
        }
        

    }
    over() {
        this.checkStart = false;
        clearInterval(this.drawLoop);
        this.ctx.drawImage(this.gameOverImage,250,125,this.gameOverImage.width,this.gameOverImage.height);
        this.ctx.fillText(this.score,325,230);
        this.ctx.strokeText(this.score,325,230)
        if(this.bestScore < this.score) {
            this.bestScore = this.score;
        } 
        this.ctx.fillText(this.bestScore,325,320);
        this.ctx.strokeText(this.bestScore,325,320)
        this.ctx.fillText("Press Space",200, 400)
        this.ctx.strokeText("Press Space",200, 400)
    }

    reset() {
        this.bird = null;

        clearInterval(this.drawLoop);

        this.obstacles = [];
        wrapper.children[1] == this.resetButton && wrapper.removeChild(this.resetButton);
    }
}





document.onkeydown = function(e) {
    switch (e.keyCode) {
        case SPACE:
        if (game.checkStart) {
            game.bird.flyTop();

            break;
        }
        else {
            game.reset();
            game.init();
        }

    }
};

let game = new Game('canvas');
