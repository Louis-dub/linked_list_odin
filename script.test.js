import { Node } from './nodeclass.js';
import { LinkedList  } from './linkedlist.js';

const list = new LinkedList();
const empty = new LinkedList();

function createNewList() {
    list.headNode = null;
    list.append("First");
    list.append("Second");
    list.append("Third");
    list.append("Five");
    list.append("Six");
    list.append("Seven");
}

test("Test prepend method", () => {
    list.prepend("First");
    expect(list.headNode.value).toBe("First");
});

test("Test prepend method with a big list", () => {
    list.prepend("Second");
    expect(list.headNode.value).toBe("Second");
})

test("Test append and tail method", () => {
    list.append("last");
    expect(list.tail()).toBe("last");
})

test("Test size method", () => {
    expect(list.size()).toBe(3);
});

test("Test head method", () => {
    expect(list.head()).toBe("Second");
});

test("Test head metho with an empty list", () => {
    expect(empty.head()).toBe(undefined);
});

test("Test tail method with an empty list", () => {
    expect(empty.tail()).toBe(undefined);
})

test("Test at method", () => {
    expect(list.at(1)).toBe("First");
});

test("Test at metho with a no exist element", () => {
    expect(list.at(5)).toBe(undefined);
});

test("Test at metho with an empty list", () => {
    expect(empty.at(2)).toBe(undefined);
});

test("Test pop method", () => {
    createNewList();
    expect(list.pop()).toBe("Seven");
    expect(list.tail()).toBe("Six");
});

test("Test pop method with an empty list", () => {
    expect(empty.pop()).toBe(undefined);
});

test("Test contains method if it's true", () => {
    expect(list.contains("Five")).toBe(true);
});

test("Test contains method if it's false", () => {
    expect(list.contains("Ten")).toBe(false);
});

test("Test findIndex method", () => {
    expect(list.findIndex("Third")).toBe(2);
});

test("Test findIndex method if value not exist", () => {
    expect(list.findIndex("Ten")).toBe(-1);
});

test("Test toString method", () => {
    expect(list.toString()).toBe("( First ) -> ( Second ) -> ( Third ) -> ( Five ) -> ( Six ) -> null");
});

test("Test toString method with an empty list", () => {
    expect(empty.toString()).toBe("null");
});

test("Test insertAt method", () => {
    list.insertAt(3, "Four", "Five");
    expect(list.toString()).toBe("( First ) -> ( Second ) -> ( Third ) -> ( Four ) -> ( Five ) -> ( Five ) -> ( Six ) -> null");
});

test("Test insertAt method with index out of bounds", () => {
    expect(() => list.insertAt(999)).toThrow(new RangeError("Index out of bounds"));
});

test("Test removeAt method", () => {
    list.removeAt(5);
    expect(list.toString()).toBe("( First ) -> ( Second ) -> ( Third ) -> ( Four ) -> ( Five ) -> ( Six ) -> null");
});

test("Test removeAt method with index out of bounds", () => {
    expect(() => list.removeAt(999)).toThrow(new RangeError("Index out of bounds"));
});