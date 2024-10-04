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

stk.push(10);
stk.push(20);
stk.push(30);
stk.push(40);
stk.push(50);


const insertAtPos = (stk, val, pos) => {

    let temp = new Stack();

    for (let i = 0; i < pos; i++) {
        temp.push(stk.pop());
    }

    stk.push(val);

    while (!temp.isEmpty()) {
        stk.push(temp.pop());
    }

    return stk;

}

console.log(stk);
insertAtPos(stk, 100, 4);
console.log(stk);


