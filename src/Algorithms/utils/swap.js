function swap(items, toInsert, fromInsert) {
    let temp = items[toInsert];
    items[toInsert] = items[fromInsert];
    items[fromInsert] = temp;
}


module.exports = swap;
