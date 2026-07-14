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

    size() {
        let size = 0;
        let node = this.headNode;

        while (node !== null) {
            size++;
            node = node.nextNode;
        }
        return size;
    }

    head() {
        if (!this.headNode)
            return undefined;
        return this.headNode.value;
    }

    tail() {
        let node = this.headNode;

        if (node === null)
            return undefined;
        while (node.nextNode !== null)
            node = node.nextNode;
        return node.value;
    }

    at(index) {
        let node = this.headNode;
        let i = 0;

        while(node !== null && i !== index) {
            node = node.nextNode;
            i++;
        }
        if (node === null)
            return undefined;
        return node.value;
    }
}

export { LinkedList };