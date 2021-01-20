class GameCanvas{
    constructor(){
        this.animateTiming = null;
        this.updateTiming = null;
        this.barrierCarTiming = null;
        this.score = [];
        this.score[0] = 0;
        this.width = null;
        this.height = null;
        this.cvt = null;
        this.context = null;
        this.createCanvas();
        this.animateBackground =  0;
        this.animateHighway();
        this.barrierCars = [];
        this.createbarrierCars();
        this.heroCar =  new heroCar(1,500,this.context, this.barrierCars,this.score); 
        this.updateCvt();
    }
    
    createCanvas(){
        this.cvt = document.getElementById('cvt');
        this.context = this.cvt.getContext('2d');
    }

    animateHighway(){
        var that=this;
        var i = 3;
        this.animateTiming = setInterval(function(){
            that.animateBackground = (that.animateBackground + i);
            i = i + 0.005;  
            Object.assign(that.cvt.style,{
                backgroundPosition: `0 ${that.animateBackground}px`, 
            });
        }, 1000/framesPerSecond);
    }

    createbarrierCars(){
        var that=this;
        this.barrierCarTiming = setInterval(function(){
            let count = randomNumGenerator(0,3);
            let barrierCar = new villainCar(count,0,that.context);
            that.barrierCars.push(barrierCar);
        }, 1300);
    }

    updateScore(){
        document.getElementById('score').innerHTML = this.score[0];
    }

    checkCollisions(){
        for(let i=0; i<this.barrierCars.length; i++){
            if((this.barrierCars[i].doesCollide(this.heroCar))==true){
                this.gameOver();         
            }
        }      
    }


    removebarrierCars(){
        for(let i=0; i<this.barrierCars.length; i++){
            if(((this.barrierCars[i].isNotInCvt())==true) && ((this.barrierCars[i].doesCollide(this.heroCar))==false)){
                this.score[0] += 1; 
                this.barrierCars.splice(i,1);     
            }
        } 

    }
    
    updateAllbarrierCars(){
        for(let i=0; i<this.barrierCars.length; i++){
            this.barrierCars[i].updatebarrierCar();
        }
    }


    updateCvt(){
        var that=this;
        this.updateTiming = setInterval(function(){
            that.context.clearRect(0, 0, cvt.width, cvt.height);
            that.heroCar.updateheroCar();
            that.updateAllbarrierCars();
            that.checkCollisions();
            that.removebarrierCars();
            that.updateScore();
        }, 1000/framesPerSecond);
    }

    gameOver(){
        clearInterval(this.animateTiming);
        clearInterval(this.updateTiming);
        clearInterval(this.barrierCarTiming);
        document.getElementById('game-over').style.display = 'block';
        var that=this;
        this.barrierCarTiming = setInterval(function(){
            location.reload();
        }, 2000);
        
    }
}
