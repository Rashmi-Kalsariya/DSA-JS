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

let str = "[{()}]";

const isValidParentheses = (str) => {

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stk.push(str[i]);
        }
        else {
            if (stk.isEmpty()) {
                return false;
            }
            let top = stk.pop();
            if ((str[i] == ")" && top !== "(") ||
                (str[i] == "}" && top !== "{") ||
                (str[i] == "]" && top !== "[")) {
                return false;
            }
        }
    }

    return stk.isEmpty();
}

let result = isValidParentheses(str);
console.log(result);

