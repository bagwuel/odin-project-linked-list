class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    getHead = () => this.head
    getTail = () => this.tail
    getSize = () => this.size
    prepend(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        }else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    append(data) {
        const newNode = new Node(data)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }
    at(index) {
        let curr = null
        let i = 0
        if (!this.isEmpty() && (index < this.size && index >= 0)) {
            curr = this.head
            while (i < index) {
                curr = curr.next
                i++;
            }
        }
        return (curr)
    }
    shift() {
        if (this.isEmpty())
            return (null)
        let head = this.head
        this.head = this.head.next
        if (this.tail === head)
            this.tail = null
        this.size--
        return (head)
    }
    pop() {
        let curr = this.head
        if (this.isEmpty())
            return (null)
        if (this.head === this.tail) {
            this.head = this.tail = null
        }else {
            while (curr.next !== this.tail)
                curr = curr.next
            this.tail = curr
            curr = curr.next
            this.tail.next = null
        }
        this.size--
        return (curr)
    }
    contains(data) {
        let curr = this.head
        if (this.isEmpty())
            return (false)
        while (curr !== null) {
            if (data === curr.data)
                return (true)
            curr = curr.next
        }
        return (false)
    }
    find(data) {
        let curr = this.head
        if (this.isEmpty())
            return (null)
        while (curr !== null) {
            if (data === curr.data)
                return (curr)
            curr = curr.next
        }
        return (null)
    }
    toString() {
        let curr = this.head
        let list = ""
        while (curr !== null) {
            list += `( ${curr.data} ) -> `;
            curr = curr.next
        }
        list += 'null'
        console.log(list);
    }
    insertAt(data, index) {
        if (index < 0 || index >= this.size)
            return;
        if (index === 0){
            this.prepend(data)
            return;
        }else {
            const newNode = new Node(data)
            let i = 0;
            let curr = this.head
            while (i < index - 1) {
                curr = curr.next
                i++;
            }
            newNode.next = curr.next
            curr.next = newNode
            this.size++
        }
    }
    removeAt(index) {
        let curr = null
        let prev = null
        let i = 0
        if (index === 0)
            return this.shift()
        if (!this.isEmpty() && (index < this.size && index >= 0)) {
            curr = this.head
            while (i < index) {
                prev = curr
                curr = curr.next
                i++;
            }
            prev.next = curr.next
            this.size--
        }
        return (curr)
    }
    reverse() {
        if (this.isEmpty() || this.head === this.tail)
            return
        else {
            let curr = this.head
            let prev = null
            let next = curr.next
            while (curr.next !== null) {
                curr.next = prev
                prev = curr
                curr = next
                next = curr.next
            }
            curr.next = prev
            this.tail = this.head
            this.head = curr
        }
    }
    isEmpty = () => this.head === null && this.tail === null;
}

const myList = new LinkedList();
myList.append(3)
myList.append(4)
myList.append(5)
myList.append(6)
myList.prepend('hi')
myList.prepend('me')
myList.prepend('you')
console.log(myList.at('1'));
console.log(myList.pop());
console.log(myList.contains(4));
console.log(myList.find(4));
console.log(myList.find('4'));
myList.toString()
console.log(myList.shift());
console.log(myList.shift());
myList.toString()
console.log(myList.getSize());
console.log(myList.removeAt(0));
myList.toString()
myList.insertAt(12, 2)
myList.toString()
myList.insertAt(12, 0)
myList.toString()
myList.insertAt(12, 18)
myList.toString()
myList.insertAt(22, 5)
myList.reverse()
myList.toString()
console.log(myList.getHead())
console.log(myList.getTail())