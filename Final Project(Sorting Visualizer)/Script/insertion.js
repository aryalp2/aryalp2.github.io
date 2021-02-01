function insertionSort(array){
    for (var i = 1; i < array.length; i++){
        temp = array[i];
        j = i - 1;
        while (j >= 0 && temp < array[j]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

console.log(insertionSort([9, 8, 6, 2, 7, 1, 8, 0, 1, 9]))
