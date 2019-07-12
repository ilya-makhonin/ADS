const swap = require('../../utils/swap');


function bubbleSort(array) {
    let swapped;            //Boolean variable to store swapped state
    let count = 0;

    do {
        swapped = false;

        for (let i = 1; i < array.length - count; i++) {      
            if (array[i - 1] > array[i]) {                  //if the left element is bigger than the right, swap them
                swap(array, i - 1, i);
                swapped = true;
            }
        }

        count++;
    } while (swapped && count < array.length);
}


module.exports = bubbleSort;                                //export module named bubbleSort
