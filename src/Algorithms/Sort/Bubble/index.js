function bubbleSort(array) {
    function swap(items, left, right) {
        if (left !== right) {
            let temp = items[left];
            items[left] = items[right];
            items[right] = temp;
        }
    }

    let swapped;
    let count = 0;

    do {
        swapped = false;

        for (let i = 1; i < array.length - count; i++) {
            if (array[i - 1] > array[i]) {
                swap(array, i - 1, i);
                swapped = true;
            }
        }

        count++;
    } while (swapped && count < array.length);
}


module.exports = bubbleSort;
