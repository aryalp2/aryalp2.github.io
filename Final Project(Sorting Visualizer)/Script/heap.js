class HeapSort extends ParentSort{
    constructor(container) {
        super();
        this.arraySize = this.getArraySize(container);
        this.barHeights = this.getBarHeightAndProperty(container)[0];
        this.barProperty = this.getBarHeightAndProperty(container)[1];
        cumulativeDelay=0;
        this.sortHeap();
    }


    sortHeap(){
        for(var j = Math.floor(this.arraySize / 2) - 1; j >= 0; j--)
        {
            this.maximumHeapifySorting(this.arraySize, j);
        }

        for(var i = this.arraySize - 1; i > 0; i--)
        {
            this.swapHeap( 0 , i );
            this.updateBarVisualization(this.barProperty[i], this.barHeights[i], "green");//Color update
            this.updateBarVisualization(this.barProperty[i], this.barHeights[i], "yellow");//Color update

            this.maximumHeapifySorting( i, 0 );

            this.updateBarVisualization(this.barProperty[i],this.barHeights[i], "#cdcdcd");//Color update
            this.updateBarVisualization(this.barProperty[i],this.barHeights[i], "green");//Color update
        }
        this.updateBarVisualization(this.barProperty[i], this.barHeights[i], "green");//Color update
    }

    swapHeap(value1, value2){
        this.updateBarVisualization(this.barProperty[value1], this.barHeights[value1], "red");//Color update
        this.updateBarVisualization(this.barProperty[value2], this.barHeights[value2], "red");//Color update

        var temp=this.barHeights[value1];
        this.barHeights[value1]=this.barHeights[value2];
        this.barHeights[value2]=temp;

        this.updateBarVisualization(this.barProperty[value1], this.barHeights[value1], "red");//Height update
        this.updateBarVisualization(this.barProperty[value2], this.barHeights[value2], "red");//Height update

        this.updateBarVisualization(this.barProperty[value1], this.barHeights[value1], "#cdcdcd");//Color update
        this.updateBarVisualization(this.barProperty[value2], this.barHeights[value2], "#cdcdcd");//Color update
    }

    maximumHeapifySorting( n , index ){
        var highest = index;
        var left = 2 * index + 1;
        var right = 2 * index + 2;

        if(left < n && this.barHeights[left] > this.barHeights[highest])
        {
            if(highest != index)
            {
                this.updateBarVisualization(this.barProperty[highest],this.barHeights[highest],"#cdcdcd");//Color update
            }

            highest=left;

            this.updateBarVisualization(this.barProperty[highest],this.barHeights[highest],"red");//Color update
        }

        if(right < n && this.barHeights[right] > this.barHeights[highest])
        {
            if(highest != index)
            {
                this.updateBarVisualization(this.barProperty[highest], this.barHeights[highest], "#cdcdcd");//Color update
            }

            highest = right;

            this.updateBarVisualization(this.barProperty[highest], this.barHeights[highest], "red");//Color update
        }

        if(highest != index)
        {
            this.swapHeap(index, highest);

            this.maximumHeapifySorting(n, highest);
        }
    }
    
}

    