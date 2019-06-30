function insertionSortReverse(items) {
    function searchIndexForInsertion(array, index) {
        for (let i = index; i > 0; i--) {
            if (array[index] >= array[i - 1] ) {
                return i;
            }
        }
        
        return 0;
    }

    function insert(array, indexTo, indexFrom) {
        let term = array[indexFrom];

        for (let i = indexFrom; i > indexTo; i--) {
            array[i] = array[i - 1];
        }

        array[indexTo] = term;
    }

    for (let i = 1; i < items.length; i++) {
        if (items[i] < items[i - 1]) {
            let indexForInsertion = searchIndexForInsertion(items, i);
            insert(items, indexForInsertion, i);
        }
    }
}


module.exports = insertionSortReverse;
