class Dequeue {
    constructor() {
        this.head = null;
        this.tail = null;
        this._count = 0;
        this.NodeCreator = require('../LinkedList/DoubleLinkedList/doubleNode');
    }

    PushBack(value) {
        let newNode = new this.NodeCreator(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.Next = newNode;
            newNode.Previous = this.tail;
            this.tail = newNode;
        }

        this._count++;
    }

    PushFront(value) {
        let newNode = new this.NodeCreator(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.Previous = newNode;
            newNode.Next = this.head;
            this.head = newNode;
        }

        this._count++;
    }

    PopBack() {
        if (this._count) {
            if (this._count === 1) {
                let result = this.tail.Value;
                this.Clear();
                return result;
            } else {
                let result = this.tail.Value;
                this.tail.Previous.Next = null;
                this.tail = this.tail.Previous;
                this._count--;
                return result;
            }
        }

        throw new Error('The dequeue is empty!');
    }

    PopFront() {
        if (this._count) {
            if (this._count === 1) {
                let result = this.head.Value;
                this.Clear();
                return result;
            } else {
                let result = this.head.Value;
                this.head.Next.Previous = null;
                this.head = this.head.Next;
                this._count--;
                return result;
            }
        }

        throw new Error('The dequeue is empty!');
    }

    Clear() {
        this.head = null;
        this.tail = null;
        this._count = 0;
    }

    IsEmpty() {
		return this._count ? false : true;
	}

    get Lenght() {
        return this._count;
    }
}


module.exports = Dequeue;
