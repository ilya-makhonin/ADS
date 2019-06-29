function shellSort(items){
    let pass = 1;
    
    while (pass < items.length / 3) {
        pass = 3 * pass + 1;
    }

    while (pass > 0) {
        for (let i = pass; i < items.length; i++) {
            for (let j = i; j > 0 && items[j] < items[j - pass]; j -= pass) {
                let temp = items[j];
                items[j] = items[j - pass];
                items[j - pass] = temp;
            }
        }

        pass = --pass / 3
    }
}


module.exports = shellSort;
