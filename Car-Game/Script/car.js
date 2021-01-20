class Car{
    constructor(count,y,ctx){
        this.y = y;
        this.count = count;
        this.x = (this.count * 200) + 70;
        this.context = ctx;
        this.img = new Image();       
        
    }

}

class villainCar extends Car{
    constructor(count,y,ctx){
        super(count,y,ctx);
        this.drawbarrierCar();
    }


    drawbarrierCar(){
        this.img.src = '../Images/villain' + randomNumGenerator(1, 7)+ '.png';
        
        var that=this;
        this.img.onload = function () {
            that.context.drawImage(that.img, that.x, that.y, 90, 90);
        };  
    }

    animate(){
        this.y += 5;
    }

    updatebarrierCar(){
        this.x = (this.count * 200) + 55;
        this.animate();
        this.context.drawImage(this.img, this.x, this.y, 90 , 90);
    }

    doesCollide(car){
        if(car.count==this.count){
            if(this.y >= 435){return true;}
            else{return false;}
        }
        else{return false;}
    }

    isNotInCvt(){
        if(this.y >= 550){
            return true;
        }
        else{
            return false;
        }
    }


}

class heroCar extends Car{
    constructor(count,y,ctx,barrierCars,score){
        super(count, y, ctx);
        this.barrierCars = barrierCars;
        this.drawheroCar();
        this.score = score;
        this.img.src = '../Images/player.png';
        setInterval(function(){
            document.onkeydown = this.onkeyStroke.bind(this);
        }.bind(this), 50);

    }

    
    drawheroCar(){
        var that=this;
        this.img.onload = function () {
            that.context.drawImage(that.img, that.x, that.y, 90, 90);
        };
    }

    updateheroCar(){
        this.x = (this.count * 200) + 55;
        this.context.drawImage(this.img, this.x, this.y, 90, 90);
    }
    
    onkeyStroke(events){
        events = events || window.event;
        if (events.keyCode == '65' || events.keyCode == '37') {
            if(this.count == 1){
                this.count = 0;                 
            }
            else if(this.count == 2){
                this.count = 1;    
            }
            
        }
        else if (events.keyCode == '68' || events.keyCode == '39') {
            if(this.count == 1){
                this.count = 2;    
            }
            else if(this.count == 0){
                this.count = 1;   
            }
        }
    }
}

