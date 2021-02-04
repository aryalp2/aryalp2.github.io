var speed = 1000;
class Visualization {
    visualizationSpeed() {
        var array_speed = inputArraySpeed.value;
        var speed = Math.pow(10, (array_speed - 1));    
        delay_time = 10000 / (Math.floor(arraySize / 10) * speed);
    }
}

var visual = new Visualization();
var delay_time = 10000 / (Math.floor(arraySize / 10) * speed);
var cumulativeDelay = 0;
inputArraySpeed.addEventListener('input', visual.visualizationSpeed);
