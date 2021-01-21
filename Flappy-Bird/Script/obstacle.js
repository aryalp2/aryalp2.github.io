class Obstacle {
    constructor(ctx, dx) {
        this.img = document.createElement('img');
        this.img.src = '../Images/obstacle.png';
        this.dx = dx;
        this.ctx = ctx;
        this.isCrossed = false;
        this.img.onload = () => {
            this.y = randomNumGenerator(-180, -10);
            this.x = 700;
            this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
        }
    }

    drawObstacle() {
        this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
    }

    updateFlappy() {
        this.x -= this.dx;
    }
}
