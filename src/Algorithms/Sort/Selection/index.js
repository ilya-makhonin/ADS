const swap = require('../../utils/swap');


function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minValue = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[minValue] > array[j]) {
                minValue = j;
            }
        }

        swap(array, i, minValue);
    }
}


module.exports = selectionSort;
