const swap = require('../../utils/swap');


function quickSortHight(array) {
    function partition(array, indexOfStartArray, indexOfEndArray) {
        let lowCursor = indexOfStartArray - 1;
        let hightCursor = indexOfEndArray;

        while (true) {
            while (array[++lowCursor] < array[indexOfEndArray]) {
                if (lowCursor >= indexOfEndArray) break;
            }

            while (array[--hightCursor] >= array[indexOfEndArray]) {
                if (hightCursor <= indexOfStartArray) break
            }

            if (lowCursor >= hightCursor) break;

            swap(array, lowCursor, hightCursor);
        }

        swap(array, indexOfEndArray, lowCursor);
        
        return lowCursor;
    }

    function sortQuick(array, startArray, endArray) {
        if (startArray >= endArray) return;

        const pivot = partition(array, startArray, endArray);
        sortQuick(array, startArray, pivot - 1);
        sortQuick(array, pivot + 1, endArray);
    }

    sortQuick(array, 0, array.length - 1);
}


module.exports = quickSortHight;
