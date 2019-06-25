function mergeSort(items) {
    function merge(left, right) {
        let result = [];

        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left[0]);
                left = left.slice(1);
            } else {
                result.push(right[0]);
                right = right.slice(1)
            }
        }

        if (left.length) {
            result = result.concat(left);
        }

        if (right.length) {
            result = result.concat(right);
        }

        return result;
    }

    function division(array) {
        if (array.length <= 1) {
            return array;
        }

        let middle = array.length / 2;
        let left = division(array.slice(0, middle));
        let right = division(array.slice(middle));

        return merge(left, right)
    }

    return division(items);
}


module.exports = mergeSort;
