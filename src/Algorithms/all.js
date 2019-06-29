const bubbleSort = require('./Sort/Bubble');
const selectionSort = require('./Sort/Selection');
const { mergeSort, mergeSortLazy } = require('./Sort/Merge');
const insertionSort = require('./Sort/Insertion');


module.exports.allAldorithms = {
    bubbleSort,
    selectionSort,
    mergeSort,
    mergeSortLazy,
    insertionSort
};
