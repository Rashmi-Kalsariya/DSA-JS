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

let str = "test";

let stk = new Stack();

for (let i = 0; i < str.length; i++) {
    stk.push(str[i]);
}

let revStr = "";

while (!stk.isEmpty()) {
    let char = stk.pop();
    if (char !== null) {
        revStr += char;
    }
}

console.log(revStr);
