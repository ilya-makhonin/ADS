function quickSortLow(array) {
    function partition(array, low, hight) {
        let startCursor = low;
        let endCursor = hight + 1;

        while(true) {
            while(array[++startCursor] < array[low]) if (startCursor === hight) break;
            while (array[--endCursor] > array[low]) if (endCursor === low) break;

            if (startCursor >= endCursor) break;

            swap(array, startCursor, endCursor);
        }
        
        swap(array, low, endCursor);

        return endCursor;
    }

    function sortQuick(array, low, hight) {
        if (hight <= low) return;

        let position = partition(array, low, hight);

        sortQuick(array, low, position - 1);
        sortQuick(array, position + 1, hight);
    }

    sortQuick(array, 0, array.length - 1);
}


module.exports = quickSortLow;
