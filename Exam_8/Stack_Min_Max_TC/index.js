

class Stack {
    constructor() {
        this.arr = [];
        this.index = -1;
    }

    push(val) {
        this.arr[++this.index] = val;
    }

    pop() {
        if (this.index > -1) {
            return this.arr[this.index--];
        }
        else {
            console.log("Stack is Underflow...");
            return null;
        }
    }

    peek() {
        if (this.index > -1) {
            return this.arr[this.index]
        }
        else {
            console.log("Stack is UnderFlow...");
        }
    }

    getMin() {
        return Math.min(...this.arr);
    }

    getMax() {
        return Math.max(...this.arr);
    }

    isEmpty() {
        return this.index == -1;
    }
}

let stk = new Stack();

stk.push(3);
stk.push(5);
stk.push(2);
stk.push(1);
stk.push(4);

console.log(stk.getMin());
console.log(stk.getMax());

