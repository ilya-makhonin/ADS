function selectionSort(items) {
    for (let i = 0; i < items.length; i++) {
        let minValue = i;

        for (let j = i + 1; j < items.length; j++) {
            if (items[minValue] > items[j]) {
                minValue = j;
            }
        }

        let temp = items[i];
        items[i] = items[minValue];
        items[minValue] = temp;
    }
}


module.exports = selectionSort;
