import { LinkedList } from "./linkedlist.js";
import { Node } from "./nodeclass.js";

const list = new LinkedList();

list.append("First");
list.append("Second");
list.append("Third");
list.append("Five");
list.append("Six");
list.append("Seven");
console.log(list.toString());

list.insertAt(3, "Four", "Five");
console.log(list.toString());

list.removeAt(5);
console.log(list.toString());