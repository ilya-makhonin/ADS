const { allDataStructures } = require('./DataStructures/all');
const { allAldorithms } = require('./Algorithms/all');


const forExports = Object.assign({}, allDataStructures, allAldorithms);


module.exports.ADS = forExports;
