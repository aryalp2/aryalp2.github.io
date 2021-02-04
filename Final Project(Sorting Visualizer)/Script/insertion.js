class InsertionSort extends ParentSort{
    constructor(container){
        super();
        this.arraySize = this.getArraySize(container);
        this.barHeights = this.getBarHeightAndProperty(container)[0];
        this.barProperty = this.getBarHeightAndProperty(container)[1];
        cumulativeDelay = 0;
        this.insertionSort();
    }

    insertionSort(){
        for (var i = 1; i < this.arraySize; i++){
            this.updateBarVisualization(this.barProperty[i], this.barHeights[i], 'yellow');
            var temp = this.barHeights[i];
            var j = i - 1;
            while (j >=0 && temp < this.barHeights[j]) {
                this.updateBarVisualization(this.barProperty[j], this.barHeights[j], 'red'); //Update color
                this.updateBarVisualization(this.barProperty[j + 1], this.barHeights[j + 1], 'red') //Update color

                this.barHeights[j + 1] = this.barHeights[j];

                this.updateBarVisualization(this.barProperty[j], this.barHeights[j], 'red');  //Update height
                this.updateBarVisualization(this.barProperty[j], this.barHeights[j + 1], 'red');  //Update height

                this.updateBarVisualization(this.barProperty[j], this.barHeights[j], '#cdcdcd');

                if (j == (i - 1)){
                    this.updateBarVisualization(this.barProperty[j + 1], this.barHeights[j + 1], 'yellow'); //Update color
                } else {
                    this.updateBarVisualization(this.barProperty[j + 1], this.barHeights[j + 1], '#cdcdcd')
                }
                j --;
            }

            this.barHeights[j + 1] = temp;

            for (var k = 0; k < i; k++){
                this.updateBarVisualization(this.barProperty[k], this.barHeights[k], 'green'); //Update color
            }
        }
        this.updateBarVisualization(this.barProperty[i - 1], this.barHeights[i - 1], 'green'); //Update color
    }
}