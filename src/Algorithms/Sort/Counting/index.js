function countingSort(array) {
    function sorting(array, minValueInArray, maxValueInArray) {
        let index;
        let targetIndex = 0; 
        let count = [];
 
        for (index = minValueInArray; index <= maxValueInArray; index++) {
            count[index] = 0;
        }
    
        for (index = 0; index < array.length; index++) {
            count[array[index]]++;
        }
    
        for (index = minValueInArray; index <= maxValueInArray; index++) {
            while (count[index]-- > 0) {
                array[targetIndex++] = index;
            }
        }
    }

    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) min = array[i];
        if (max < array[i]) max = array[i];
    }

    sorting(array, min, max);
}


module.exports = countingSort;
