class SelectionSort extends ParentSort{

    constructor(container){
        super();
        this.arraySize = this.getArraySize(container);
        this.barHeights = this.getBarHeightAndProperty(container)[0];
        this.barProperty = this.getBarHeightAndProperty(container)[1];
        cumulativeDelay = 0;
        this.selectionSort();
    }

    selectionSort() {
        for (var i = 0; i < this.arraySize - 1; i++){
            this.updateBarVisualization(this.barProperty[i], this.barHeights[i], 'red');
            var minIndex = i;
            for (var j = i + 1 ; j < this.arraySize; j++){
                this.updateBarVisualization(this.barProperty[j], this.barHeights[j], 'yellow');
                
                if (this.barHeights[j] < this.barHeights[minIndex]){
                    if (minIndex != i){
                        this.updateBarVisualization(this.barProperty[minIndex], this.barHeights[minIndex], ' #cdcdcd');
                    }
                    minIndex = j;

                    this.updateBarVisualization(this.barProperty[j], this.barHeights[j], 'red');
                } else {
                    this.updateBarVisualization(this.barProperty[j], this.barHeights[j]," #cdcdcd");
                }

            }
            if (minIndex != i){
                var temp = this.barHeights[minIndex];
                this.barHeights[minIndex] = this.barHeights[i];
                this.barHeights[i] = temp;

                this.updateBarVisualization(this.barProperty[minIndex], this.barHeights[minIndex], 'red');
                this.updateBarVisualization(this.barProperty[i], this.barHeights[j], 'red');
                this.updateBarVisualization(this.barProperty[minIndex], this.barHeights[minIndex], ' #cdcdcd');
            }
            this.updateBarVisualization(this.barProperty[i], this.barHeights[i], 'green');
            
        }
        this.updateBarVisualization(this.barProperty[i], this.barHeights[i], "green");
    }
}