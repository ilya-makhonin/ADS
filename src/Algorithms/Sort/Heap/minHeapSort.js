const swap = require('../../utils/swap');


function minHeapSort(array) {
	function heapify(array, startIndex, arrayEnd) {
        let largeChild; 
        let childLeft;
        let childRight;
    	
    	while(startIndex < arrayEnd) {
	        largeChild = startIndex;
	        childLeft = 2 * startIndex + 1;
	       	childRight = childLeft + 1;

	        if (childLeft < arrayEnd && array[childLeft] < array[largeChild]) {
                largeChild = childLeft;
            }    
	        
	        if (childRight < arrayEnd && array[childRight] < array[largeChild]) {
                largeChild = childRight;
            }   
	        
	        if (largeChild === startIndex) break;

            swap(array, startIndex, largeChild);
            
	        startIndex = largeChild;
	    }
    }

	function buildHeap(array) {
		let currentIndex = Math.floor(array.length / 2);

		while (currentIndex >= 0) {
			heapify(array, currentIndex, array.length);
			currentIndex--;
		}
    }
    
	buildHeap(array);
	
	const length = array.length - 1;
        
    for (let endIndex = length; endIndex >= 0; endIndex--) {
        swap(array, 0, endIndex);
        heapify(array, 0, endIndex);
	}
	
	for (let i = 0; i <= Math.round(length / 2); i++) {
		swap(array, i, length - i);
	}
};


module.exports = minHeapSort;
