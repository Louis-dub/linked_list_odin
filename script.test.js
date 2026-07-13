import { Node } from './nodeclass.js';
import { LinkedList  } from './linkedlist.js';

const list = new LinkedList();

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