function binarySearchRecursion(array, searchElement) {
    function search(array, start, finish, searchElement) {
        let mid = Math.round((start + finish) / 2);

        if (array[mid] === searchElement) {
            return mid;
        } else if (array[mid] > searchElement) {
            return search(array, start, mid - 1, searchElement);
        } else if (array[mid] < searchElement) {
            return search(array, mid + 1, finish, searchElement);
        } else {
            return -1;
        }
    }

    return search(array, 0, array.length - 1, searchElement);
}


module.exports = binarySearchRecursion;
