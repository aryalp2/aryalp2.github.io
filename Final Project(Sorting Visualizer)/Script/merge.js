class MergeSort extends ParentSort {

    constructor(container){
        super();
        this.arraySize = this.getArraySize(container);
        this.barHeights = this.getBarHeightAndProperty(container)[0];
        this.barProperty = this.getBarHeightAndProperty(container)[1];
        cumulativeDelay=0;
        this.start = 0;
        this.end = this.arraySize - 1;
        this.mergePartition(this.start, this.end);
    }

    mergePartition(start, end)
    {
        if(start < end)
        {
            var mid = Math.floor((start + end) / 2);
            this.updateBarVisualization(this.barProperty[mid], this.barHeights[mid], "yellow");//Color update

            this.mergePartition(start, mid);
            this.mergePartition(mid+1, end);

            this.mergeSort(start, mid, end);
        }
    }

    mergeSort(start,mid,end)
    {
        var p = start;
        var q = mid + 1;

        var Arr = [];
        var k = 0;

        for(var i=start; i<=end; i++)
        {
            if(p>mid)
            {
                Arr[k++] = this.barHeights[q++];
                this.updateBarVisualization(this.barProperty[q-1], this.barHeights[q-1], "red");//Color update
            }
            else if(q>end)
            {
                Arr[k++] = this.barHeights[p++];
                this.updateBarVisualization(this.barProperty[p-1], this.barHeights[p-1], "red");//Color update
            }
            else if(this.barHeights[p] < this.barHeights[q])
            {
                Arr[k++] = this.barHeights[p++];
                this.updateBarVisualization(this.barProperty[p-1], this.barHeights[p-1], "red");//Color update
            }
            else
            {
                Arr[k++] = this.barHeights[q++];
                this.updateBarVisualization(this.barProperty[q-1], this.barHeights[q-1], "red");//Color update
            }
        }

        for(var t=0;t<k;t++)
        {
            this.barHeights[start++] = Arr[t];
            this.updateBarVisualization(this.barProperty[start-1], this.barHeights[start-1], "green");//Color update
        }
    }

    
}