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

    isEmpty() {
        return this.index === -1;
    }
}

let stk = new Stack();

stk.push(10);
stk.push(20);
stk.push(30);
stk.push(40);
stk.push(50);

const insertEleBottom = (stk, val) => {
    if (stk.isEmpty()) {
        stk.push(val);
        return;
    }

    let top = stk.pop();
    insertEleBottom(stk, val);
    stk.push(top);
}

const Reverse = (stk) => {
    if (stk.isEmpty()) {
        return;
    }

    let top = stk.pop();
    Reverse(stk);
    insertEleBottom(stk, top);
}

console.log(stk);
Reverse(stk);
console.log(stk);