var startComparision = document.querySelectorAll('ion-icon');
var inputArrayGenerationTimeComplexity=document.getElementById("arrayGenerateB");
var arrayContainerTimeComplexity = document.getElementsByClassName("array-containerB");

var arraySizeTimeComplexity = 25;
var barHeightsTimeComplexity=[];
var barPropertyTimeComplexity=[];
var marginSizeTimeComplexity = 0.5;
var maximumRandomValueTimeComplexity = 60;
var minimunRandomValueTimeComplexity = 25;

window.onload = generateArrayTimeComplexity();

function generateArrayTimeComplexity() {
    for (var j = 0; j < arrayContainerTimeComplexity.length; j++){
        
        arrayContainerTimeComplexity[j].innerHTML = '';
    
        var scale = arraySizeTimeComplexity / minimunRandomValueTimeComplexity;
        for (var i = 0; i < arraySizeTimeComplexity; i++) {
            barHeightsTimeComplexity[i] = (generateRandomNumber(maximumRandomValueTimeComplexity, minimunRandomValueTimeComplexity) + minimunRandomValueTimeComplexity) * scale - extraBarHeight;
            barPropertyTimeComplexity[i] = document.createElement('div');
            arrayContainerTimeComplexity[j].appendChild(barPropertyTimeComplexity[i]);
            barPropertyTimeComplexity[i].style.margin = '0% ' + marginSizeTimeComplexity + '%';
            barPropertyTimeComplexity[i].style.backgroundColor = ' #cdcdcd';
            barPropertyTimeComplexity[i].style.borderTopLeftRadius = '10px';
            barPropertyTimeComplexity[i].style.borderTopRightRadius = '10px';
            barPropertyTimeComplexity[i].style.width = ( 100 / arraySizeTimeComplexity - (2 * marginSizeTimeComplexity)) + '%';
            barPropertyTimeComplexity[i].style.height = barHeightsTimeComplexity[i] + '%';        
        }
    }
}


inputArrayGenerationTimeComplexity.addEventListener('click', generateArrayTimeComplexity);

var iconPlay = document.getElementById('icon-play');
iconPlay.addEventListener('click', visualizeAlgorithmsTimeComplexity);
function visualizeAlgorithmsTimeComplexity(){
    new BubbleSort(arrayContainerTimeComplexity[0]);
    new MergeSort(arrayContainerTimeComplexity[1]);
    new QuickSort(arrayContainerTimeComplexity[2]);
    new SelectionSort(arrayContainerTimeComplexity[3]);
    new HeapSort(arrayContainerTimeComplexity[4]);
    new InsertionSort(arrayContainerTimeComplexity[5]);
}