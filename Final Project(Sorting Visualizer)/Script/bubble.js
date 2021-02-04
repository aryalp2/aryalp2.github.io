class BubbleSort extends ParentSort {
    constructor(container) {
        super();
        this.arraySize = this.getArraySize(container);
        this.barHeights = this.getBarHeightAndProperty(container)[0];
        this.barProperty = this.getBarHeightAndProperty(container)[1];
        this.bubble();
    }

    bubble(){
        cumulativeDelay=0;
        for(var i=0;i < this.arraySize - 1 ; i++){
            
            for(var j=0; j < this.arraySize - i - 1 ; j++){

                this.updateBarVisualization(this.barProperty[j], this.barHeights[j],"yellow");

                if(this.barHeights[j] > this.barHeights[j+1]){
                    
                    this.updateBarVisualization(this.barProperty[j], this.barHeights[j], "red");
                    this.updateBarVisualization(this.barProperty[j+1], this.barHeights[j+1], "red");//Color update
    
                    var temp = this.barHeights[j];
                    this.barHeights[j] = this.barHeights[j+1];
                    this.barHeights[j+1] = temp;
    
                    this.updateBarVisualization(this.barProperty[j], this.barHeights[j], "red");//Height update
                    this.updateBarVisualization(this.barProperty[j+1], this.barHeights[j+1], "red");//Height update
                }
                this.updateBarVisualization(this.barProperty[j], this.barHeights[j], " #cdcdcd");//Color updat
            }
            this.updateBarVisualization(this.barProperty[j], this.barHeights[j], "green");//Color update
        }
        this.updateBarVisualization(this.barProperty[0], this.barHeights[0], "green");//Color update

    }

}

