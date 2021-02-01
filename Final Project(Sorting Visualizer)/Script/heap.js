class HeapSort extends ParentSort{
    constructor() {
        super();
        c_delay=0;
        this.heap_sort();
    }


    heap_sort(){
        for(var i=Math.floor(arraySize/2)-1;i>=0;i--)
        {
            this.maximumHeapifySorting(arraySize,i);
        }

        for(var i=arraySize-1;i>0;i--)
        {
            this.swapHeap(0,i);
            this.barVisualizationUpdate(barProperty[i],barHeights[i],"green");//Color update
            this.barVisualizationUpdate(barProperty[i],barHeights[i],"yellow");//Color update

            this.maximumHeapifySorting(i,0);

            this.barVisualizationUpdate(barProperty[i],barHeights[i],"#cdcdcd");//Color update
            this.barVisualizationUpdate(barProperty[i],barHeights[i],"green");//Color update
        }
        this.barVisualizationUpdate(barProperty[i],barHeights[i],"green");//Color update
    }

    swapHeap(i,j){
        this.barVisualizationUpdate(barProperty[i],barHeights[i],"red");//Color update
        this.barVisualizationUpdate(barProperty[j],barHeights[j],"red");//Color update

        var temp=barHeights[i];
        barHeights[i]=barHeights[j];
        barHeights[j]=temp;

        this.barVisualizationUpdate(barProperty[i],barHeights[i],"red");//Height update
        this.barVisualizationUpdate(barProperty[j],barHeights[j],"red");//Height update

        this.barVisualizationUpdate(barProperty[i],barHeights[i],"#cdcdcd");//Color update
        this.barVisualizationUpdate(barProperty[j],barHeights[j],"#cdcdcd");//Color update
    }

    maximumHeapifySorting(n,i){
        var largest=i;
        var l=2*i+1;
        var r=2*i+2;

        if(l<n && barHeights[l]>barHeights[largest])
        {
            if(largest!=i)
            {
                this.barVisualizationUpdate(barProperty[largest],barHeights[largest],"#cdcdcd");//Color update
            }

            largest=l;

            this.barVisualizationUpdate(barProperty[largest],barHeights[largest],"red");//Color update
        }

        if(r<n && barHeights[r]>barHeights[largest])
        {
            if(largest!=i)
            {
                this.barVisualizationUpdate(barProperty[largest],barHeights[largest],"#cdcdcd");//Color update
            }

            largest=r;

            this.barVisualizationUpdate(barProperty[largest],barHeights[largest],"red");//Color update
        }

        if(largest!=i)
        {
            this.swapHeap(i,largest);

            this.maximumHeapifySorting(n,largest);
        }
    }

    
}

    