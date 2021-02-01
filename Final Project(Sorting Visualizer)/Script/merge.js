class MergeSort extends ParentSort {

    constructor(){
        super();
        c_delay=0;
        this.start = 0;
        this.end = arraySize - 1;
        this.merge_partition(this.start, this.end);
    }

    merge_sort(start,mid,end)
    {
        var p=start,q=mid+1;

        var Arr=[],k=0;

        for(var i=start; i<=end; i++)
        {
            if(p>mid)
            {
                Arr[k++]=barHeights[q++];
                this.barVisualizationUpdate(barProperty[q-1],barHeights[q-1],"red");//Color update
            }
            else if(q>end)
            {
                Arr[k++]=barHeights[p++];
                this.barVisualizationUpdate(barProperty[p-1],barHeights[p-1],"red");//Color update
            }
            else if(barHeights[p]<barHeights[q])
            {
                Arr[k++]=barHeights[p++];
                this.barVisualizationUpdate(barProperty[p-1],barHeights[p-1],"red");//Color update
            }
            else
            {
                Arr[k++]=barHeights[q++];
                this.barVisualizationUpdate(barProperty[q-1],barHeights[q-1],"red");//Color update
            }
        }

        for(var t=0;t<k;t++)
        {
            barHeights[start++]=Arr[t];
            this.barVisualizationUpdate(barProperty[start-1],barHeights[start-1],"green");//Color update
        }
    }

    merge_partition(start,end)
    {
        if(start < end)
        {
            var mid=Math.floor((start + end) / 2);
            this.barVisualizationUpdate(barProperty[mid],barHeights[mid],"yellow");//Color update

            this.merge_partition(start,mid);
            this.merge_partition(mid+1,end);

            this.merge_sort(start,mid,end);
        }
    }
}