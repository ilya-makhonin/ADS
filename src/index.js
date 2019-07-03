const DataStructures = require('./DataStructures/all');
const Algorithms = require('./Algorithms/all');


const forExports = Object.assign({}, DataStructures, Algorithms);


module.exports.ADS = forExports;
