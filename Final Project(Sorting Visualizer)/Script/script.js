var inputArraySize=document.getElementById('arraySize');
var arraySize=inputArraySize.value;
var inputArrayGeneration=document.getElementById("arrayGenerate");
var inputArraySpeed=document.getElementById("arraySpeed");
var sortingAlgorithms=document.querySelectorAll(".algorithms li a");

var barHeights=[];
var barProperty=[];
var margin_size;
var arrayContainer=document.getElementById("array-container");

function randomNumGenerator(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

inputArrayGeneration.addEventListener("click",arrayGenerator);
inputArraySize.addEventListener("input",arraySizeUpdate);

function arrayGenerator() {
    arrayContainer.innerHTML = '';
    var res = 80 / ( inputArraySize.max - inputArraySize.min );
    for (var i = 0; i < arraySize; i++) {
        barHeights[i] = (randomNumGenerator(inputArraySize.min, inputArraySize.max) + 25 ) * res;
        barProperty[i] = document.createElement('div');
        arrayContainer.appendChild(barProperty[i]);
        margin_size = 0.09999999;
        barProperty[i].style.margin = '0% ' + margin_size + '%';
        barProperty[i].style.backgroundColor = ' #cdcdcd';
        barProperty[i].style.borderTopLeftRadius = '10px';
        barProperty[i].style.borderTopRightRadius = '10px';
        barProperty[i].style.width = ( 100 / arraySize - (2 * margin_size)) + '%';
        barProperty[i].style.height = barHeights[i] + '%';        
    }
}

function arraySizeUpdate(){
    arraySize = inputArraySize.value;
    arrayGenerator();
}

window.onload = arraySizeUpdate();

for (var i = 0; i < sortingAlgorithms.length; i++){
    sortingAlgorithms[i].addEventListener('click', algorithmsVisualizer);
}


function linkDisable(){
    for (var i = 0; i < sortingAlgorithms.length; i++){
        sortingAlgorithms[i].classList = [];
        sortingAlgorithms[i].classList.add("butt_locked");
        sortingAlgorithms[i].removeEventListener('click', algorithmsVisualizer);
        inputArraySize.disabled=true;
        inputArrayGeneration.disabled=true;
        inputArraySpeed.disabled=true;
    }
}

function linkEnable(){
    window.setTimeout(function(){
        for (var i = 0; i <sortingAlgorithms.length; i++){
            sortingAlgorithms[i].classList=[];
            sortingAlgorithms[i].classList.add('butt_unselected');
            sortingAlgorithms[i].addEventListener('click', algorithmsVisualizer);
            inputArraySize.disabled=false;
            inputArrayGeneration.disabled=false;
            inputArraySpeed.disabled=false;
        }
    }, c_delay = c_delay + delay_time);
}


function algorithmsVisualizer(){
    linkDisable();
    this.classList.add('butt_selected');
    switch(this.innerHTML){
        case "Bubble Sort":
            new BubbleSort();
            break;
        
        case "Merge Sort":
            new MergeSort();
            break;

        case "Quick Sort":
            new QuickSort();
            break;

        case "Selection Sort":
            new SelectionSort();
            break;

        case "Heap Sort":
            new HeapSort();
            break;

        // case "Bubble Sort":
        //     bubble();
        //     break;
    }
    linkEnable();

}




// var speed = 1000;

// class Visualization {
//     constructor(){
//         this.delay_time=5000/(Math.floor(this.arraySize/10)*speed);        //Decrease numerator to increase speed.
//         this.c_delay=0;//This is updated ov every div change so that visualization is visible.
//     }

//     visualizationSpeed() {
//         var array_speed = inputArraySpeed.value;
//         switch (parseInt(array_speed)){
//             case 1:
//                 speed = 10;
//                 break;
    
//             case 2:
//                 speed = 100;
//                 break;
    
//             case 3:
//                 speed = 500;
//                 break;
    
//             case 4:
//                 speed = 1000;
//                 break;
    
//             case 5:
//                 speed = 10000;
//                 break;
//         }
    
//         delay_time = 5000 / (Math.floor(arraySize / 10) * speed);
//     }

//     barVisualizationUpdate(arrayContainer, height, color) {
//         window.setTimeout(function(){
//             arrayContainer.style.margin = '0% ' + margin_size + '%';
//             arrayContainer.style.width = (100 / arraySize - (2 * margin_size)) + '%';
//             arrayContainer.style.height = height + '%';
//             arrayContainer.style.backgroundColor = color;
//         }, c_delay = c_delay + delay_time);
//     }

//     // linkEnable() {
//     //     window.setTimeout(function(){
//     //         for (var i = 0; i <sortingAlgorithms.length; i++){
//     //             sortingAlgorithms[i].classList=[];
//     //             sortingAlgorithms[i].classList.add('butt_unselected');
//     //             sortingAlgorithms[i].addEventListener('click', algorithmsVisualizer);
//     //             inputArraySize.disabled=false;
//     //             inputArrayGeneration.disabled=false;
//     //             inputArraySpeed.disabled=false;
//     //         }
//     //     }, c_delay = c_delay + delay_time);
//     // }
// }

// var visual = new Visualization();
// var delay_time = 5000 / (Math.floor(this.arraySize / 10) * speed);
// var c_delay = 0; 
// inputArraySpeed.addEventListener('input', visual.visualizationSpeed);
