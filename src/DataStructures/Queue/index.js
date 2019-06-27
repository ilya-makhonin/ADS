const Node = require('../LinkedList/LinkedList/node');


class Queue {
    constructor() {
        this._head = null;
        this._tail = null;
        this._count = 0;
    }

    EnQueue(value) {
        const newNode = new Node(value);

        if (this._head === null) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.Next = newNode;
            this._tail = newNode;
        }

        this._count++;
    }

    DeQueue() {
        if (this._count) {
            const result = this._head.Value;

            if (this._count === 1) {
                this._head = null;
                this._tail = null;
            } else {
                this._head = this._head.Next;
            }

            this._count--;
            return result;
        }

        throw new Error('The queue is empty!');
    }

    Peek() {
        if (this._count) {
            return this._head.Value;
        }

        throw new Error('The queue is empty!');
    }

    Clear() {
        this._head = null;
        this._tail = null;
        this._count = 0;
    }

    get Lenght() {
        return this._count;
    }
}


module.exports = Queue;
