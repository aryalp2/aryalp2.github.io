class Bird {
    constructor(ctx) {
        this.x = ctx.canvas.width / 2 - 200;
        this.y = 200;
        this.dy = 0.5;
        this.img = new Image();
        this.img.src = '../Images/bird.png';
        this.img.style.width = '40px';
        this.img.style.height = '30px';
        this.img.onload = () => {
            ctx.clearRect(0, 0, ctx.canvas.height, ctx.canvas.width);
            ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height);
        }
        this.ctx = ctx;
    }
    fallDown() {
        this.y += this.dy;
        this.dy = this.dy * GRAVITY;
        
    }

    flyTop() {
        this.img.src = '../Images/birdUp.png';
        this.img.onload = () => {
            this.y -= 30;
            this.dy = 0.5;
        }
        
    }

    drawBird() {
        this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
    }
}
