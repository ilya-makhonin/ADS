function binarySearch(array, searchElement) {
    let start = 0;
    let finish = array.length - 1;

    while (start < finish) {
        let mid = Math.round((start + finish) / 2);
    
        if (array[mid] === searchElement) {
            return mid;
        } else if (array[mid] > searchElement) {
            finish = mid - 1;
        } else if (array[mid] < searchElement) {
            start = mid + 1;
        }
    }

    return -1;
}


module.exports = binarySearch;
