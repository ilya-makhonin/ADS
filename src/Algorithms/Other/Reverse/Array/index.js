function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        let back = array.length - i - 1;

        array[i] = array[back];
        array[back] = temp;
    }
}


function reverseArrayOutPlace(array) {
    let result = [];

    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }

    return result;
}


module.exports = {
    reverseArrayInPlace,
    reverseArrayOutPlace
};
