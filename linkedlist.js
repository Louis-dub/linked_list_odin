import { Node } from './nodeclass.js';

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        let node = this.headNode;
        const newNode = new Node(value);

        while (node.nextNode !== null)
            node = node.nextNode;
        node.nextNode = newNode;
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