const swap = require('../../utils/swap');


function shellSort(array){
    let pass = 1;
    
    while (pass < array.length / 3) {
        pass = 3 * pass + 1;
    }

    while (pass > 0) {
        for (let i = pass; i < array.length; i++) {
            for (let j = i; j > 0 && array[j] < array[j - pass]; j -= pass) {
                swap(array, j, j - pass);
            }
        }

        pass = --pass / 3
    }
}


module.exports = shellSort;
