var speed = 1000;

class Visualization {
    constructor(){
        this.delay_time=5000/(Math.floor(this.arraySize/10)*speed);        //Decrease numerator to increase speed.
        this.c_delay=0;//This is updated ov every div change so that visualization is visible.
    }

    visualizationSpeed() {
        var array_speed = inputArraySpeed.value;
        switch (parseInt(array_speed)){
            case 1:
                speed = 10;
                break;
    
            case 2:
                speed = 100;
                break;
    
            case 3:
                speed = 500;
                break;
    
            case 4:
                speed = 1000;
                break;
    
            case 5:
                speed = 5000;
                break;
        }
    
        delay_time = 5000 / (Math.floor(arraySize / 10) * speed);
    }

    // barVisualizationUpdate(arrayContainer, height, color) {
    //     window.setTimeout(function(){
    //         arrayContainer.style.margin = '0% ' + margin_size + '%';
    //         arrayContainer.style.width = (100 / arraySize - (2 * margin_size)) + '%';
    //         arrayContainer.style.height = height + '%';
    //         arrayContainer.style.backgroundColor = color;
    //     }, c_delay = c_delay + delay_time);
    // }
}

var visual = new Visualization();
var delay_time = 5000 / (Math.floor(this.arraySize / 10) * speed);
var c_delay = 0; 
inputArraySpeed.addEventListener('input', visual.visualizationSpeed);
