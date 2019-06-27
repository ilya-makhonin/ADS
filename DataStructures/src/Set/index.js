class SetStruct {
    constructor(values=[]) {
        this._set = this.create(values);
    }

    create(items) {
        let newSetArray = [];
        for (let item = 0; item < items.length; item++) {
            let value = items[item];
            if (newSetArray.indexOf(value) !== -1) {
                throw new Error('This value already exists!');
            }
            newSetArray.push(value);
        }

        return newSetArray;
    }

    notSet(maybeSet) {
        if (!maybeSet instanceof Set) {
            throw new Error('This is not Set type')
        }
    }

    Contains(item) {
        for (let i = 0; i < this._set.length; i++) {
            if (this._set[i] === item) {
                return true;
            }
        }
        return false;
    }

    Add(item) {
        if (this.Contains(item)) {
            throw new Error('This value already exists!')
        } else {
            this._set.push(item);
        }
    }

    AddRange(items) {
        function convertToArray(data) {
            if (data instanceof Set) {
                return data._set;
            }

            return data;
        }

        items = convertToArray(items);

        for (let item = 0; item < items.length; item++) {
            this.Add(items[item]);
        }
    }

    Remove(item) {
        for (let i = 0; i < this._set.length; i++) {
            if (this._set[i] === item) {
                return this._set.splice(i, 1)[0];
            }
        }
    }

    Union(otherSet) {
        this.notSet(otherSet);

        let result = new Set(this._set);

        for (let item of otherSet._set) {
            if (!this.Contains(item)) {
                result.Add(item);
            }
        }

        return result;
    }

    Intersection(otherSet) {
        this.notSet(otherSet);

        let result = new Set();

        for (let item of this._set) {
            if (otherSet.Contains(item)) {
                result.Add(item);
            }
        }

        return result;
    }

    Difference(otherSet) {
        this.notSet(otherSet);

        let result = new Set(this._set);

        for (let item of otherSet._set) {
            result.Remove(item);
        }

        return result;
    }

    SymmetricDifference(otherSet) {
        this.notSet(otherSet);

        let union = this.Union(otherSet);
        let intersection = this.Intersection(otherSet);
        return union.Difference(intersection);
    }

    IsSubset(otherSet) {
        this.notSet(otherSet);

        let result = new Set(otherSet._set);

        for (let item of this._set) {
            result.Remove(item)
        }

        return result.count === 0;
    }

    get count() {
        return this._set.length;
    }
}


module.exports = SetStruct;
