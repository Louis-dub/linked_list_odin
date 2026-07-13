import { Node } from './nodeclass.js';

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    tail() {
        let node = this.headNode;
        
        while (node.nextNode !== null)
            node = node.nextNode;
        return node.value;
    }
}

export { LinkedList };