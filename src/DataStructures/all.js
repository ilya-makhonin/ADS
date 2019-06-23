const Stack = require('./Stack');
const Set = require('./Set');
const Queue = require('./Queue');
const { LinkedList, DoubleLinkedList } = require('./LinkedList');
const Heap = require('./Heap');


module.exports.allDataStructures = {
    Stack,
    Set,
    Queue,
    LinkedList,
    DoubleLinkedList,
    MinHeap: Heap.minHeap,
    MaxHeap: Heap.maxHeap
};
