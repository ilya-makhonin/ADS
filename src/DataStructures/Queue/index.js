class Queue {
    constructor() {
        this._head = null;
        this._tail = null;
        this._count = 0;
        this.NodeCreator = require('../LinkedList/LinkedList/node')
    }

    EnQueue(value) {
        const newNode = new this.NodeCreator(value);

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
        if (this._count === 0) {
            throw new Error('The queue is empty!')
        } else {
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
    }

    Peek() {
        if (this._count === 0) {
            throw new Error('The queue is empty!')
        } else {
            return this._head.Value;
        }
    }

    Clear() {
        this._head = null;
        this._tail = null;
        this._count = 0;
    }

    get Volume() {
        return this._count;
    }
}


module.exports = Queue;
