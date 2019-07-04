const bubbleSort = require('./Bubble');
const selectionSort = require('./Selection');
const { mergeSortInPlace, mergeSortOutPlace } = require('./Merge');
const { insertionSort, insertionSortReverse } = require('./Insertion');
const shellSort = require('./Shell');
const { quickSortLow, quickSortHight } = require('./Quick');
const countingSort = require('./Counting');
const { minHeapSort, maxHeapSort } = require('./Heap');


module.exports.Sort = {
    bubbleSort,
    selectionSort,
    mergeSortInPlace,
    mergeSortOutPlace,
    insertionSort,
    insertionSortReverse,
    shellSort,
    quickSortLow,
    quickSortHight,
    countingSort,
    minHeapSort,
    maxHeapSort
};
