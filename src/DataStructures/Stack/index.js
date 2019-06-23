class Stack {
	constructor() {
		this._head = null;
		this._count = 0;
		this.NodeCreator = require('../LinkedList/LinkedList/node');
	}

	Push(value) {
		const newNode = new this.NodeCreator(value);

		if (this._head === null) {
			this._head = newNode;
		} else {
			newNode.Next = this._head;
			this._head = newNode;
		}

		this._count++;
	}

	Pop() {
		if (this._count === 0) {
			throw new Error('The Stack is empty!');
		} else {
			let result = this._head.Value;
			if (this._count === 1) {
				this._head = null;
			} else {
				this._head = this._head.Next;
			}

			this._count--;
			return result;
		}
	}

	Peek() {
	    if (this._count === 0) {
            throw new Error('The stack is empty!')
        } else {
            return this._head.Value;
        }
	}

	Clear() {
		this._head = null;
		this._count = 0;
	}

	get Lenght() {
		return this._count;
	}
}


module.exports = Stack;
