class BinaryMaxHeap {
    constructor(sourceArray) {
        this.listForHeap = [];
        sourceArray && this.BuildHeap(sourceArray);
    }

    _swap(indexTo, indexFrom) {
        let temp = this.listForHeap[indexFrom];
        this.listForHeap[indexFrom] = this.listForHeap[indexTo];
        this.listForHeap[indexTo] = temp;
    }

    Add(newValue) {
        this.listForHeap.push(newValue);

        let newItem = this.heapSize - 1;
        let parent = (newItem - 1) / 2;

        while (newItem > 0 && this.listForHeap[parent] < this.listForHeap[newItem]) {
            this._swap(parent, newItem);

            newItem = parent;
            parent = (newItem - 1) / 2;
        }
    }

    Heapify(indexOfHeapRoot) {
        let leftChild;
        let rightChild;
        let largestChild;

        while(true) {
            leftChild = 2 * indexOfHeapRoot + 1;
            rightChild = 2 * indexOfHeapRoot + 2;
            largestChild = indexOfHeapRoot;

            if (leftChild < this.heapSize && this.listForHeap[leftChild] > this.listForHeap[largestChild]) {
                largestChild = leftChild;
            }

            if (rightChild < this.heapSize && this.listForHeap[rightChild] > this.listForHeap[largestChild]) {
                largestChild = rightChild;
            }

            if (largestChild === indexOfHeapRoot) break;

            this._swap(largestChild, indexOfHeapRoot);

            indexOfHeapRoot = largestChild;
        }
    }

    ExtractMax() {
        const maxItem = this.listForHeap[0];
        
        this.listForHeap[0] = this.listForHeap[this.heapSize - 1];
        this.listForHeap.pop();
        this.Heapify(0);

        return maxItem;
    }

    BuildHeap(sourceArray) {
        this.listForHeap = sourceArray;
        
        for (let i = this.heapSize / 2; i >= 0; i--) {
            this.Heapify(i);
        }
    }

    get getMax() {
        return this.listForHeap[0];
    }

    get heapSize() {
        return this.listForHeap.length;
    }

    get heap() {
        return this.listForHeap;
    }
}
