class ParentSort{
    updateBarVisualization(arrayContainer, height, color) {
        window.setTimeout(function(){
            arrayContainer.style.height = height + '%';
            arrayContainer.style.backgroundColor = color;
        }, cumulativeDelay = cumulativeDelay + delay_time);
    }

    getArraySize(container){
        return container.getElementsByTagName("div").length;
    }

    getBarHeightAndProperty(container){
        var barheight = [];
        var barProperty = [];
        for (var i = 0; i < container.getElementsByTagName('div').length; i++){
            barheight.push(container.getElementsByTagName('div')[i].style.height.replace('%', ''));
            barProperty.push(container.getElementsByTagName('div')[i]);
        }
        return [barheight, barProperty];
    }

}
