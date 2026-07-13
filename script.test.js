import { Node } from './nodeclass.js';
import { LinkedList  } from './linkedlist.js';

const list = new LinkedList();

test("Add new node", () => {
    list.append("First");
    expect(list.headNode.value).toBe("First");
});