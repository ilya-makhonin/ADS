function bubbleSort(items) {
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

        for (let i = 1; i < items.length - count; i++) {
            if (items[i - 1] > items[i]) {
                swap(items, i - 1, i);
                swapped = true;
            }
        }

        count++;
    } while (swapped && count < items.length);
}


module.exports = bubbleSort;
