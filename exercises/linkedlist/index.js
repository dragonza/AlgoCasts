// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return;
        let node = this.head;
        while (node && node.next !== null) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previousNode = this.head;
        let node = this.head.next;

        while (node.next) {
            previousNode = node;
            node = node.next;
        }

        previousNode.next = null;
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        let lastNode = this.getLast();
        lastNode.next = new Node(data);

    }

    getAt(index) {
        let count = 0;
        let node = this.head;
        while (node) {

            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) return;
        let size = this.size();
        if (index >= size) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let previousNode = this.getAt(index - 1);
        previousNode.next = this.getAt(index + 1);
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let size = this.size();
        if (index >= size) {
            return this.insertLast(data);
        }

        if (index === 0) {
            return this.insertFirst(data);
        }
        let previousNode = this.getAt(index - 1);
        previousNode.next = new Node(data, previousNode.next);
    }

    forEach(func) {
        if (!this.head) return;
        let node = this.head;
        while (node) {
            func(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
