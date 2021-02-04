var inputArraySize=document.getElementById('arraySize');
var arraySize = inputArraySize.value;
var inputArrayGeneration=document.getElementById("arrayGenerate");
var inputArraySpeed=document.getElementById("arraySpeed");
var sortingAlgorithms=document.querySelectorAll(".class-algorithms li a");

var barHeights = [];
var barProperty = [];
var margin_size = 0.0999999999;
var arrayContainer=document.getElementById("array-container");
var extraBarHeight = 10;
window.onload = generateArray();

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var count = 0;
function generateArray() {
    arrayContainer.innerHTML = '';
    var scale = 85 / ( inputArraySize.max - inputArraySize.min );
    for (var i = 0; i < arraySize; i++) {
        barHeights[i] = (generateRandomNumber(inputArraySize.min, inputArraySize.max) + 20) * scale + extraBarHeight;
        barProperty[i] = document.createElement('div');
        arrayContainer.appendChild(barProperty[i]);
        barProperty[i].style.margin = '0% ' + margin_size + '%';
        barProperty[i].style.backgroundColor = ' #cdcdcd';
        barProperty[i].style.borderTopLeftRadius = '10px';
        barProperty[i].style.borderTopRightRadius = '10px';
        barProperty[i].style.width = ( 100 / arraySize - (2 * margin_size)) + '%';
        barProperty[i].style.height = barHeights[i] + '%';        
    }
}



inputArrayGeneration.addEventListener("click",generateArray);
inputArraySize.addEventListener("input",updateArraySize);

function updateArraySize(){
    arraySize = inputArraySize.value;
    generateArray();
}


for (var i = 0; i < sortingAlgorithms.length; i++){
    sortingAlgorithms[i].addEventListener('click', visualizeAlgorithms);
}

function visualizeAlgorithms(){
    disableLink();
    this.classList.add('butt_selected');
    switch(this.innerHTML){
        
        case "Merge Sort":
            new MergeSort(arrayContainer);
            break;

        case "Quick Sort":
            new QuickSort(arrayContainer);
            break;

        case "Bubble Sort":
            new BubbleSort(arrayContainer);
            break;

        case "Selection Sort":
            new SelectionSort(arrayContainer);
            break;

        case "Heap Sort":
            new HeapSort(arrayContainer);
            break;

        case "Insertion Sort":
            new InsertionSort(arrayContainer);
            break;
    }
    
    enableLink();

}


function disableLink(){
    for (var i = 0; i < sortingAlgorithms.length; i++){
        sortingAlgorithms[i].classList = [];
        sortingAlgorithms[i].classList.add("butt_locked");
        sortingAlgorithms[i].removeEventListener('click', visualizeAlgorithms);
        inputArraySize.disabled=true;
        inputArrayGeneration.disabled=true;
        inputArraySpeed.disabled=true;
    }
}

function enableLink(){
    window.setTimeout(function(){
        for (var i = 0; i <sortingAlgorithms.length; i++){
            sortingAlgorithms[i].classList=[];
            sortingAlgorithms[i].classList.add('butt_unselected');
            sortingAlgorithms[i].addEventListener('click', visualizeAlgorithms);
            inputArraySize.disabled=false;
            inputArrayGeneration.disabled=false;
            inputArraySpeed.disabled=false;
        }
    }, cumulativeDelay = cumulativeDelay + delay_time);
}