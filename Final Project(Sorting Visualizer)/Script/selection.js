class SelectionSort extends ParentSort{

    constructor(){
        super();
        this.selectionSort();
    }

    selectionSort() {
        c_delay = 0;

        for (var i = 0; i < arraySize - 1; i++){
            this.barVisualizationUpdate(barProperty[i], barHeights[i], 'red');
            let minIndex = i;
            for (var j = i + 1 ; j < arraySize; j++){
                this.barVisualizationUpdate(barProperty[j], barHeights[j], 'yellow');
                
                if (barHeights[j] < barHeights[minIndex]){
                    if (minIndex != i){
                        this.barVisualizationUpdate(barProperty[minIndex], barHeights[minIndex], ' #cdcdcd');
                    }
                    minIndex = j;

                    this.barVisualizationUpdate(barProperty[j], barHeights[j], 'red');
                } else {
                    this.barVisualizationUpdate(barProperty[j],barHeights[j]," #cdcdcd");
                }

            }
            if (minIndex != i){
                var temp = barHeights[minIndex];
                barHeights[minIndex] = barHeights[i];
                barHeights[i] = temp;

                this.barVisualizationUpdate(barProperty[minIndex], barHeights[minIndex], 'red');
                this.barVisualizationUpdate(barProperty[i], barHeights[j], 'red');
                this.barVisualizationUpdate(barProperty[minIndex], barHeights[minIndex], ' #cdcdcd');
            }
            this.barVisualizationUpdate(barProperty[i], barHeights[i], 'green');
            
        }
        this.barVisualizationUpdate(barProperty[i],barHeights[i],"green");
    }
}