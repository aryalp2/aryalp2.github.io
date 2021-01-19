class Game{
    constructor(mainElement, noOfBalls){
        this.mainElement = mainElement;
        this.noOfBalls = noOfBalls;
        this.balls = [];
        this.createBalls();

    }

    createBalls(){
        for(var i = 0; i < this.noOfBalls; i++) {
            var randWidth = randomNumberGenerator(0,2);
            var ball = new Ball(this.mainElement,ballWidth);
            ball.create();
            var rand1 = randomNumberGenerator(2, 4);
            var rand2 = randomNumberGenerator(2, 4);
            ball.setprefferedLocation(rand1,rand2);
            this.balls.push(ball);
        }
    }

    detectBallCollision(ballA,ballB){
        var sumofRadius = (ballA.diameter/2) + (ballB.diameter/2);
        var x1 = ballA.ballX + (ballA.diameter/2);
        var x2 = ballB.ballX + (ballB.diameter/2);
        var y1 = ballA.ballY + (ballA.diameter/2);
        var y2 = ballB.ballY + (ballB.diameter/2);
        var distance = (x1- x2) ** 2 + (y1-y2) ** 2;
        var squareofRadius = sumofRadius ** 2;
        
        if(distance <= squareofRadius){
            return true;
        }
        else{
            return false;
        }
    }

    detectAllCollision(){
            for(var i=0; i <(this.balls.length); i++){
                for(var j=0; j<(this.balls.length);j++){
                    if(i != j){
                        if(this.detectBallCollision(this.balls[i],this.balls[j])){
                            this.balls[i].changeSpeed(this.balls[j]);
                        }
                    }
                }
    
            }
    }

    moveBalls(){
        var that=this;
        var Interval = setInterval(function(){
            for(var i = 0; i < that.noOfBalls; i++) {
                if(that.balls[i].isXCollision()){
                    that.balls[i].reverseX();
                    
                }
                if(that.balls[i].isYCollision()){
                    that.balls[i].reverseY();
                }
                that.balls[i].move();
            }  
            that.detectAllCollision();
        }, 10);
    }

}
