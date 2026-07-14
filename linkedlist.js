import { Node } from './nodeclass.js';

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        let node = this.headNode;
        const newNode = new Node(value);

        if (!node) {
            this.headNode = newNode;
            return;
        }
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

    pop() {
        let node = this.headNode;

        if (!node)
            return undefined;
        let nextNode = node.nextNode;
        if (!nextNode) {
            this.headNode = null;
            return node.value;
        }
        while (nextNode.nextNode) {
            node = nextNode;
            nextNode = node.nextNode;
        }
        node.nextNode = null;
        return nextNode.value;
    }

    contains(value) {
        let node = this.headNode;
        
        if (!node)
            return false;
        while(node !== null && node.value !== value)
            node = node.nextNode;
        if (!node)
            return false;
        return true;
    }

    findIndex(value) {
        let node = this.headNode;
        let i = 0;
        
        if (!node)
            return -1;
        while(node !== null && node.value !== value) {
            node = node.nextNode;
            i++
        }
        if (!node)
            return -1;
        return i;
    }
}

export { LinkedList };