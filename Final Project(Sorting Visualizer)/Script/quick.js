class QuickSort extends ParentSort {
    constructor(){
        // this.Quick();
        super();
        c_delay=0;
        this.start = 0;
        this.end = arraySize - 1;
        this.quickSortAlgorithm(this.start , this.end);
    }

    // Quick(){
    //     c_delay=0;
  
    //     this.quickSortAlgorithm(0 , arraySize-1);

    //     // visual.linkEnable();
    // }

    quickPartition (start, end){
        var i = start + 1;
        var piv = barHeights[start] ;//make the first element as pivot element.
        this.barVisualizationUpdate(barProperty[start],barHeights[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ ){
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (barHeights[ j ] < piv)
            {
                this.barVisualizationUpdate(barProperty[j],barHeights[j],"yellow");//Color update

                this.barVisualizationUpdate(barProperty[i],barHeights[i],"red");//Color update
                this.barVisualizationUpdate(barProperty[j],barHeights[j],"red");//Color update

                var temp=barHeights[i];
                barHeights[i]=barHeights[j];
                barHeights[j]=temp;

                this.barVisualizationUpdate(barProperty[i],barHeights[i],"red");//Height update
                this.barVisualizationUpdate(barProperty[j],barHeights[j],"red");//Height update

                this.barVisualizationUpdate(barProperty[i],barHeights[i]," #cdcdcd");//Height update
                this.barVisualizationUpdate(barProperty[j],barHeights[j]," #cdcdcd");//Height update

                i += 1;
            }
        }
        this.barVisualizationUpdate(barProperty[start],barHeights[start],"red");//Color update
        this.barVisualizationUpdate(barProperty[i-1],barHeights[i-1],"red");//Color update
        
        var temp=barHeights[start];//put the pivot element in its proper place.
        barHeights[start]=barHeights[i-1];
        barHeights[i-1]=temp;

        this.barVisualizationUpdate(barProperty[start],barHeights[start],"red");//Height update
        this.barVisualizationUpdate(barProperty[i-1],barHeights[i-1],"red");//Height update

        for(var t=start;t<=i;t++)
        {
            this.barVisualizationUpdate(barProperty[t],barHeights[t],"green");//Color update
        }

        return i-1;//return the position of the pivot
    }

    quickSortAlgorithm (start, end){
        if( start < end ){
            //stores the position of pivot element
            var piv_pos = this.quickPartition (start, end );     
            this.quickSortAlgorithm ( start, piv_pos -1);//sorts the left side of pivot.
            this.quickSortAlgorithm (piv_pos + 1, end) ;//sorts the right side of pivot.
        }
 }

}
