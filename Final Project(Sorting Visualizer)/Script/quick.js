class QuickSort extends ParentSort {
    constructor(container){
        super();
        this.arraySize = this.getArraySize(container);
        this.barHeights = this.getBarHeightAndProperty(container)[0];
        this.barProperty = this.getBarHeightAndProperty(container)[1];
        cumulativeDelay=0;
        this.start = 0;
        this.end = this.arraySize - 1;
        this.quickSortAlgorithm(this.start , this.end);
    }

    quickSortAlgorithm (start, end){
        if( start < end ){
            var pivotPosition = this.quickPartition (start, end );  //stores the position of pivot element   
            this.quickSortAlgorithm ( start, pivotPosition -1);//sorts the left side of pivot.
            this.quickSortAlgorithm (pivotPosition + 1, end) ;//sorts the right side of pivot.
        }
    }

    quickPartition (start, end){
        var i = start + 1;
        var piv = this.barHeights[start] ;//make the first element as pivot element.
        this.updateBarVisualization(this.barProperty[start], this.barHeights[start],"yellow");//Color update

        for(var j = start + 1; j <= end ; j++ ){
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (this.barHeights[ j ] < piv)
            {
                this.updateBarVisualization(this.barProperty[j], this.barHeights[j],"yellow");//Color update

                this.updateBarVisualization(this.barProperty[i], this.barHeights[i],"red");//Color update
                this.updateBarVisualization(this.barProperty[j], this.barHeights[j],"red");//Color update

                var temp = this.barHeights[i];
                this.barHeights[i] = this.barHeights[j];
                this.barHeights[j] = temp;

                this.updateBarVisualization(this.barProperty[i], this.barHeights[i],"red");//Height update
                this.updateBarVisualization(this.barProperty[j], this.barHeights[j],"red");//Height update

                this.updateBarVisualization(this.barProperty[i], this.barHeights[i]," #cdcdcd");//Height update
                this.updateBarVisualization(this.barProperty[j], this.barHeights[j]," #cdcdcd");//Height update

                i += 1; 
            }
        }
        this.updateBarVisualization(this.barProperty[start], this.barHeights[start],"red");//Color update
        this.updateBarVisualization(this.barProperty[i-1], this.barHeights[i-1],"red");//Color update
        
        var temp = this.barHeights[start];//put the pivot element in its proper place.
        this.barHeights[start] = this.barHeights[i-1];
        this.barHeights[i-1] = temp;

        this.updateBarVisualization(this.barProperty[start], this.barHeights[start],"red");//Height update
        this.updateBarVisualization(this.barProperty[i-1], this.barHeights[i-1],"red");//Height update

        for(var t=start;t<=i;t++)
        {
            this.updateBarVisualization(this.barProperty[t], this.barHeights[t],"green");//Color update
        }

        return i-1;//return the position of the pivot
    }

    

}
