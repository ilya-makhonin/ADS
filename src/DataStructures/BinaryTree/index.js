const BinaryNode = require('./binaryNode');


class BinarySearchTree {
    constructor(values=null) {
        this.root = null;
        values && this._create(values);
    }

    _create(values) {
        for (let i = 0; i < values.length; i++) {
            this.Add(values[i]);
        }
    }

    Add(value) {
        const newBinaryNode = new BinaryNode(value);

        if (this.root === null) {
            this.root = newBinaryNode;
        } else {
            let current = this.root;

            while (current) {
                if (value >= current.Value) {
                    if (current.Right === null) {
                        current.Right = newBinaryNode;
                        break;
                    }
                    
                    current = current.Right;
                } else if (value < current.Value) {
                    if (current.Left === null) {
                        current.Left = newBinaryNode;
                        break;
                    }

                    current = current.Left;
                } 
            }
        }
    }

    Clear() {
        this.root = null;
    }
}


module.exports = BinarySearchTree;
