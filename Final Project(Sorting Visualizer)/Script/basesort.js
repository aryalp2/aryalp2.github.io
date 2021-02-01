class ParentSort{
    constructor(){
        this.barVisualizationUpdate();
    }
    barVisualizationUpdate(arrayContainer, height, color) {
        window.setTimeout(function(){
            arrayContainer.style.margin = '0% ' + margin_size + '%';
            arrayContainer.style.width = (100 / arraySize - (2 * margin_size)) + '%';
            arrayContainer.style.height = height + '%';
            arrayContainer.style.backgroundColor = color;
        }, c_delay = c_delay + delay_time);
    }
}

// let parentSort = new ParentSort();
