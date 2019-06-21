class Node {
    constructor (value) {
        this._value = value;
        this._next = null;
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
}


module.exports = Node;
