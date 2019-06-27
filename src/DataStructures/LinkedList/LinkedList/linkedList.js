const Node = require('./node');


class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._count = 0;
    }

    Add(value) {
        let newNode = new Node(value);
        if (this._head === null) {
            this._head = newNode;
            this._tail = this._head;
        } else {
            this._tail.Next = newNode;
            this._tail = newNode;
        }
        this._count++;
    }

    Remove(item) {
        let previous = null;
        let current = this._head;
        while (current !== null) {
            if (current.Value === item) {
                if (previous !== null) {
                    previous.Next = current.Next;
                    if (current.Next === null) {
                        this._tail = previous;
                    }
                } else {
                    this._head = this._head.Next;
                    if (this._head === null) {
                        this._tail = null;
                    }
                }
                this._count--;
                return true;
            }
            previous = current;
            current = current.Next;
        }
        return false;
    }

    Contains(item) {
        let current = this._head;
        while (current !== null) {
            if (current.Value === item) {
                return true;
            }
            current = current.Next;
        }
        return false;
    }

    Clear() {
        this._head = null;
        this._tail = null;
        this._count = 0;
    }

    CopyTo(array, index) {
        let current = this._head;
        while (current !== null) {
            array[index++] = current.Value;
            current = current.Next;
        }
    }
}


module.exports = LinkedList;
