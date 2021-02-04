var speed = 1000;
class Visualization {
    constructor(){
        this.delay_time = 10000/(Math.floor(this.arraySize / 10) * speed);   //Decrease numerator to increase speed.
        this.cumulativeDelay=0;//This is updated ov every div change so that visualization is visible.
    }

    visualizationSpeed() {
        var array_speed = inputArraySpeed.value;
        var speed = Math.pow(10, (array_speed - 1));    
        delay_time = 10000 / (Math.floor(arraySize / 10) * speed);
    }
}

var visual = new Visualization();
var delay_time = 10000 / (Math.floor(this.arraySize / 10) * speed);
var cumulativeDelay = 0; 
console.log(cumulativeDelay);
inputArraySpeed.addEventListener('input', visual.visualizationSpeed);
