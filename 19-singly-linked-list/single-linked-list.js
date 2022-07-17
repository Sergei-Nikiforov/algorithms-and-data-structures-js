// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {     // adds a node to the tail
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {     // removes a node from the tail
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {   // deletes a node from the head
        if(!this.head) return undefined;

        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) this.tail = null;

        return temp;
    }

    unshift(val) { // adds node to the head
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }

    get(index) { // returns node by index
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;

        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {   // finds node by index and changes the val of node
        let node = this.get(index);
        if(!node) return false;

        node.val = val;
        return true;
    }

    insert(index, val) { // insert node
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);

        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    remove(index) { // remove node
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = prev.next.next;
        this.length--;
        return removed;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let next = null;
        let prev = null;

        for(let i = 0; i < this.length; i++) {
            next = current.next;            
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }

    print() {
        let arr = [];
        let current = this.head;

        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

}

let list = new SinglyLinkedList();
list.push('0');
list.push('1');
list.push('2');
list.push('3');
list.push('4');

//console.log(JSON.stringify(list));
list.print();
list.reverse();
list.print();
console.log(JSON.stringify(list));
//console.log(list.remove(4));
//console.log(JSON.stringify(list));