class BubbleSort extends ParentSort {
    constructor() {
        super();
        this.bubble();
    }

    bubble(){
        c_delay=0;
        for(var i=0;i < arraySize - 1 ; i++){
            
            for(var j=0; j < arraySize - i - 1 ; j++){

                this.barVisualizationUpdate(barProperty[j],barHeights[j],"yellow");
    
                if(barHeights[j]>barHeights[j+1]){
                    
                    this.barVisualizationUpdate(barProperty[j],barHeights[j], "red");
                    this.barVisualizationUpdate(barProperty[j+1],barHeights[j+1], "red");//Color update
    
                    var temp=barHeights[j];
                    barHeights[j]=barHeights[j+1];
                    barHeights[j+1]=temp;
    
                    this.barVisualizationUpdate(barProperty[j],barHeights[j], "red");//Height update
                    this.barVisualizationUpdate(barProperty[j+1],barHeights[j+1], "red");//Height update
                }
                this.barVisualizationUpdate(barProperty[j],barHeights[j], " #cdcdcd");//Color updat
            }
            this.barVisualizationUpdate(barProperty[j],barHeights[j], "green");//Color update
        }
        this.barVisualizationUpdate(barProperty[0],barHeights[0], "green");//Color update
    
        // visual.linkEnable();
    }
}

