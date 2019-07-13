function countingSort(array) {
    function sorting(array, minValueInArray, maxValueInArray) {
        let index;
        let targetIndex = 0; 
        let count = [];                                                     //Declare an empty array for count
 
        for (index = minValueInArray; index <= maxValueInArray; index++) {
            count[index] = 0;                                               //Fill count array with 0's
        }
    
        for (index = 0; index < array.length; index++) {
            count[array[index]]++;                                          //Modify the count array such that each element at each index 
                                                                            //stores the sum of previous counts
        }
    
        for (index = minValueInArray; index <= maxValueInArray; index++) {
            while (count[index]-- > 0) {                                    //Output each object from the input sequence followed by 
                                                                            //decreasing its count by 1
                array[targetIndex++] = index;
            }
        }
    }

    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) min = array[i];                                 //Determine the minumum value of the array
        if (max < array[i]) max = array[i];                                 //Determine the maximum value of the array
    }

    sorting(array, min, max);
}


module.exports = countingSort;                                              //Export module named countingSort
