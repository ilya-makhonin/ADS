class DoubleNode {
    constructor (value) {
        this._value = value;
        this._next = null;
        this._previous = null;
    }

    get Value() {
        return this._value;
    }

    get Next() {
        return this._next;
    }

    set Next(nextNode) {
        if (nextNode instanceof DoubleNode || nextNode === null) {
            this._next = nextNode;
        }
    }

    get Previous() {
        return this._previous;
    }

    set Previous(previousNode) {
        if (previousNode instanceof DoubleNode || previousNode === null) {
            this._previous = previousNode;
        }
    }
}


module.exports = DoubleNode;
