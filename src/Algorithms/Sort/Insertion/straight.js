function insertionSort(items) {
    function findInsertionIndex(items, valueToInsert) {
        for (let i = 0; i < items.length; i++) {                        //Traverse through 1 to length of array
            if (items[i] > valueToInsert) {                             
                return i;
            }
        }

        throw new Error('Index is not found!');
    }

    function insert(itemsArray, indexInsertionAt, indexInsertionFrom) {
        let temp = itemsArray[indexInsertionAt];                        //Put this element into a temporary variable

        itemsArray[indexInsertionAt] = itemsArray[indexInsertionFrom];  //Insert element at index indexInsertionAt

        for (let current = indexInsertionFrom; current > indexInsertionAt; current--) {
            itemsArray[current] = itemsArray[current - 1];              //Move the remaining elements to the right until indexInsertionAt is reached
        }

        itemsArray[indexInsertionAt + 1] = temp;                        //Take element from a temporary variable and put it back into the array
    }

    let sortedRangeEndIndex = 1;

    while (sortedRangeEndIndex < items.length) {
        if (items[sortedRangeEndIndex] < items[sortedRangeEndIndex - 1]) {
            let insertIndex = findInsertionIndex(items, items[sortedRangeEndIndex]);
            insert(items, insertIndex, sortedRangeEndIndex);
        }
        
        sortedRangeEndIndex++;
    }
}


module.exports = insertionSort;                                         //Export module named insertionSort
