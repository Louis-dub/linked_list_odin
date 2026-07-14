import { Node } from './nodeclass.js';
import { LinkedList  } from './linkedlist.js';

const list = new LinkedList();
const empty = new LinkedList();

test("Prepend a node", () => {
    list.prepend("First");
    expect(list.headNode.value).toBe("First");
});

test("Prepend second node", () => {
    list.prepend("Second");
    expect(list.headNode.value).toBe("Second");
})

test("Append Node and return his value", () => {
    list.append("last");
    expect(list.tail()).toBe("last");
})

test("Get the list size", () => {
    expect(list.size()).toBe(3);
});

test("Return the list head", () => {
    expect(list.head()).toBe("Second");
});

test("Return the head of an empty list", () => {
    expect(empty.head()).toBe(undefined);
});

test("Return the tail of an empty list", () => {
    expect(empty.tail()).toBe(undefined);
})