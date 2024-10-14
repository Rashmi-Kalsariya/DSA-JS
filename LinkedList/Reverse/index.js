class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    inserAtHead(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    printList() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    reverseList() {
        let prev = null;
        let current = this.head;
        let next;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        this.printList();
        return this.head;
    }

    detectCycle() {
        if (!this.head) {
            return false;
        }

        let one = this.head;
        let two = this.head;

        while (one && two) {
            one = one.next;
            two = two.next;

            if (one == two) {
                return true;
            }
        }
        return false;
    }


    middle() {
        if (!this.head) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.data;
    }

    AddOne() {
        this.reverseList();
        let current = this.head;
        let carry = 1;
        while (current) {
            let sum = current.data + carry;
            current.data = sum % 10;
            carry = Math.floor(sum / 10);
            if (!carry) break;
            current = current.next;
        }
        if (carry) {
            current = new Node(carry);
            current.next = this.head;
            this.head = current;
        }
        this.reverseList();
        this.printList();
        return this.head;
    }

    delete() {
        if (!this.head) return;

        if (this.head.next) {
            this.head.data = this.head.next.data;
            this.head.next = this.head.next.next;
        }
    }
}

let list = new LinkedList();
list.inserAtHead(6);
list.inserAtHead(5);
list.inserAtHead(4);
list.inserAtHead(3);
list.inserAtHead(2);
list.inserAtHead(1);



// list.printList()
// console.log("\n");
// list.head.next.next.next.next = list.head.next;
// console.log(list.reverseList());
// list.head.next.next.next.next = list.head.next;
// 1 -> 2 -> 3 -> 4 -> 2
// console.log(list.detectCycle());


// console.log(list.middle());

// list.AddOne();

list.delete();

list.printList();
