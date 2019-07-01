const bubbleSort = require('./Bubble');
const selectionSort = require('./Selection');
const { mergeSort, mergeSortLazy } = require('./Merge');
const { insertionSort, insertionSortReverse } = require('./Insertion');
const shellSort = require('./Shell');
const { quickSortLow, quickSortHight } = require('./Quick');


module.exports.sortAlgorithms = {
    bubbleSort,
    selectionSort,
    mergeSort,
    mergeSortLazy,
    insertionSort,
    insertionSortReverse,
    shellSort,
    quickSortLow,
    quickSortHight
};
