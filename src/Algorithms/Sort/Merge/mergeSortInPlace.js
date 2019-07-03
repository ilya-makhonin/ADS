function mergeSortInPalce(items) {
    function merge(items, left, right) {
        let leftIndex = 0;
        let rightIndex = 0;
        let targetIndex = 0;
        let remaining = left.length + right.length;

        while (remaining > 0) {
            if (leftIndex >= left.length) {
                items[targetIndex] = right[rightIndex++];
            } else if (rightIndex >= right.length) {
                items[targetIndex] = left[leftIndex++];
            } else if (left[leftIndex] < right[rightIndex]) {
                items[targetIndex] = left[leftIndex++];
            } else {
                items[targetIndex] = right[rightIndex++];
            }

            targetIndex++;
            remaining--;
        }
    }

    function division(items) {
        if (items.length <= 1) return;

        let middle = items.length / 2;

        let left = items.slice(0, middle);
        let right = items.slice(middle);

        division(left);
        division(right);
        
        merge(items, left, right);
    }

    division(items);
}


module.exports = mergeSortInPalce;
