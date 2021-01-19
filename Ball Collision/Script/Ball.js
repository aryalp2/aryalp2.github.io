class Ball {
    constructor(mainElement, diameter){
        this.mainElement=mainElement;
        this.ballX=0;
        this.ballY=0;
        this.dx = 0;
        this.dx = 0;
        this.diameter = diameter;
    }

    create(){
        
        //Removing overlap of two balls
        while (true){
            var randomX = randomNumberGenerator(0, 1200 - this.diameter);
            if (randomX >= (this.ballX + 2 * this.diameter)){
                this.ballX = randomNumberGenerator(0, 1200 - this.diameter);
                break;
            }
        }

        while (true){
            var randomY = randomNumberGenerator(0, 1000-this.diameter);
            if (randomY >= (this.ballY + 2 * this.diameter)){
                this.ballY = randomNumberGenerator(0,1000-this.diameter);
                break;
            }
        }
        
        this.ballElement = document.createElement('div');
        this.ballElement.style.height = this.diameter + 'px';
        this.ballElement.style.width  = this.diameter + 'px';
        this.ballElement.classList.add('BallStyle');
        
        this.ballElement.style.backgroundColor = 'black';
        this.ballElement.style.left = this.ballX + 'px';
        this.ballElement.style.top = this.ballY + 'px'; 
        
        this.mainElement.appendChild(this.ballElement);
        
    }


    setprefferedLocation(a,b){
        this.dx = prefferedLocation[a];
        this.dy = prefferedLocation[b];
    }

    reverseX(){
        this.dx = -this.dx;
    }

    reverseY(){
        this.dy = -this.dy;
    }

    changeSpeed(ball){
        var tempx = this.dx;
        this.dx = ball.dx;
        ball.dx = tempx;

        var tempy = this.dy;
        this.dy = ball.dy;
        ball.dy = tempy;

        this.move();
        ball.move();

    }

    draw(){
        this.ballElement.style.left = this.ballX + 'px';
        this.ballElement.style.top = this.ballY + 'px';
    }

    move(){
        
        this.ballX += this.dx;
        this.ballY += this.dy;
        this.draw();
    }

    isXCollision(){
        if(((this.ballX + (this.diameter)) >= 1200) || ((this.ballX) <=0) ){
            return true;
        }
        else{
            return false;
        }
    }

    isYCollision(){
        if(((this.ballY + (this.diameter)) >= 1000) || ((this.ballY) <=0) ){
            return true;
        }
        else{
            return false;
        }
    }

}

function randomNumberGenerator(num1, num2){
    min = Math.ceil(num1);
    max = Math.floor(num2);
    return Math.floor(Math.random() * (max - min)) + min;
}


