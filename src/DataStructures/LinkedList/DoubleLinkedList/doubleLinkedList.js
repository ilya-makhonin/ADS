const DoubleNode = require('./doubleNode');


class DoubleLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._count = 0;
    }

    AddFirst(value) {
        const newNode = new DoubleNode(value);
        let temp = this._head;
        this._head = newNode;
        this._head.Next = temp;

        if (this._count === 0) {
            this._tail = this._head;
        } else {
            temp.Previous = this._head;
        }

        this._count++;
    }

    AddLast(value) {
        const newNode = new DoubleNode(value);

        if (this._count === 0) {
            this._head = newNode;
        } else {
            this._tail.Next = newNode;
            newNode.Previous = this._tail
        }

        this._tail = newNode;
        this._count++;
    }

    AddAfter(value, index) {
        const newNode = new DoubleNode(value);
        let current = this._head;
        let i = 0;

        while (current !== newNode && i !== index) {
            i++;
            current = current.Next
        }

        if (current === null) {
            return;
        }

        let temp = current.Next;

        if (temp === null) {
            this.AddLast(value);
            return;
        }

        current.Next = newNode;
        temp.Previous = newNode;
        newNode.Next = temp;
        newNode.Previous = current;
        this._count++;
    }

    /**
     * AddBefore() { // }
     */

    Remove(item) {
        let previous = null;
        let current = this._head;

        while (current !== null) {
            if (current.Value === item) {
                if (previous !== null) {
                    previous.Next = current.Next;

                    if (current.Next === null) {
                        this._tail = previous;
                    } else {
                        current.Next.Previous = previous;
                    }

                    this._count--;
                } else {
                    this.RemoveFirst();
                }

                return true;
            }

            previous = current;
            current = current.Next;
        }

        return false;
    }

    RemoveFirst() {
        if (this._count !== 0) {
            this._head = this._head.Next;
            this._count--;

            if (this._count === 0) {
                this._tail = null
            } else {
                this._head.Previous = null;
            }
        }
    }

    RemoveLast() {
        if (this._count !== 0) {
            if (this._count === 1) {
                this._head = null;
                this._tail = null;
            } else {
                this._tail.Previous.Next = null;
                this._tail = this._tail.Previous;
            }

            this._count--;
        }
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


module.exports = DoubleLinkedList;
