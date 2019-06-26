const Node = require('../LinkedList/LinkedList/node');


class Stack {
	constructor() {
		this._head = null;
		this._count = 0;
	}

	Push(value) {
		const newNode = new Node(value);

		if (this._head === null) {
			this._head = newNode;
		} else {
			newNode.Next = this._head;
			this._head = newNode;
		}

		this._count++;
	}

	Pop() {
		if (this._count) {
			let result = this._head.Value;
			if (this._count === 1) {
				this._head = null;
			} else {
				this._head = this._head.Next;
			}

			this._count--;
			return result;
		}

		throw new Error('The stack is empty!');
	}

	Peek() {
	    if (this._count) {
            return this._head.Value;
		}
		
		throw new Error('The stack is empty!');
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
