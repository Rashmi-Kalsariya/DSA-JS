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
            this.arr[this.index--] = -1;
        }
        else {
            console.log("Stack is Underflow...");
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
        if (this.index > -1) {
            return false;
        }
        else {
            return true;
        }
    }
}


let stk = new Stack();

stk.push(10);
stk.push(20);
stk.push(30);
stk.pop();
stk.push(50);

console.log(stk.peek());
console.log(stk.isEmpty());


console.log(stk);

