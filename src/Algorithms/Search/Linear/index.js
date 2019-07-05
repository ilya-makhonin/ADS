function linearSearch(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }
    }

    return -1;
}


module.exports = linearSearch;
