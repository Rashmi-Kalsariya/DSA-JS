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
            console.log({ err: "Stack is Underflow" });

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
            return false
        }
        else {
            return true
        }
    }
}

let str = "te#ot#dsa#n##ode##"
let str2 = "#react##";


let stk = new Stack();

for (let i = 0; i < str.length; i++) {

    if (str[i] == "#") {
        if (!stk.isEmpty()) {
            stk.pop()
        }
    }
    else {
        stk.push(str[i])
    }
}

console.log(stk.arr);


