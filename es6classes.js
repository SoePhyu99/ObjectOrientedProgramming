// Exercises - Implementing stack using ES6Classes
let _items = new WeakMap();
class Stack {
    constructor() {
        _items.set(this, []);
    }
    push(item) {
        _items.get(this).push(item);
    }
    peek() {
        if (_items.get(this).length == 0) {
            throw Error('Stack is empty!')
        }
        this.count++;
        console.log(_items.get(this)[_items.get(this).length - 1])
    }
    pop() {
        if (_items.get(this).length == 0) {
            throw Error('Stack is empty!')
        }
        console.log(_items.get(this).pop());
    }
    get count() {
        return _items.get(this).length;
    }
}

let s = new Stack();