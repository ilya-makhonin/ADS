class BinaryNode {
    constructor(value=null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    get Value() {
        return this.value;
    }

    get Left() {
        return this.left
    }

    get Right() {
        return this.right;
    }

    set Left(binaryNode) {
        if (binaryNode instanceof BinaryNode || binaryNode === null) {
            this.left = binaryNode;
        }
    }

    set Right(binaryNode) {
        if (binaryNode instanceof BinaryNode || binaryNode === null) {
            this.right = binaryNode;
        }
    }
}


module.exports = binaryNode;
