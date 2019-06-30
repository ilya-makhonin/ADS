const bubbleSort = require('./Sort/Bubble');
const selectionSort = require('./Sort/Selection');
const { mergeSort, mergeSortLazy } = require('./Sort/Merge');
const { insertionSort, insertionSortReverse } = require('./Sort/Insertion');
const shellSort = require('./Sort/Shell');


module.exports.allAldorithms = {
    bubbleSort,
    selectionSort,
    mergeSort,
    mergeSortLazy,
    insertionSort,
    insertionSortReverse,
    shellSort
};
