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
        this._next = nextNode;
    }

    get Previous() {
        return this._previous;
    }

    set Previous(previousNode) {
        this._previous = previousNode;
    }
}


module.exports = DoubleNode;