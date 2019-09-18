import { log } from "./uitls";

class ListNode {
  next: ListNode = null;

  constructor(public val: any) {}
}

class SinglyLinkedList {
  head: ListNode = null;
  tail: ListNode = null;
  length = 0;

  push = (val: any) => {
    const newNode = new ListNode(val);

    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = this.tail = newNode;
    }

    this.length++;

    return this;
  };

  pop = () => {
    if (!this.length) return;

    let pre = this.head;
    let current = pre.next;

    while (current.next) {
      pre = current;
      current = current.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length--;

    this.resetIfEmpty();

    return current;
  };

  unshift = (val: any) => {
    const newNode = new ListNode(val);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = this.tail = newNode;
    }

    this.length++;
    return this;
  };

  shift = () => {
    if (!this.length) return;

    const { head } = this;
    this.head = head.next;
    this.length--;
    this.resetIfEmpty();

    return head;
  };

  get = (index: number) => {
    if (index < 0 || index >= this.length) return;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  };

  set = (index: number, val: any) => {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  };

  insert = (index: number, val: any): boolean => {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new ListNode(val);
    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  };

  remove = (index: number): ListNode => {
    if (index < 0 || index >= this.length) return;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    this.resetIfEmpty();
    return removedNode;
  };

  reverse = () => {
    if (!this.length) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev: ListNode = null;
    let next: ListNode = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  };

  traverse = () => {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  };

  private resetIfEmpty = () => {
    if (!this.length) this.head = this.tail = null;
  };
}

const list = new SinglyLinkedList();
list
  .push("Hello")
  .push("there")
  .push("test")
  .push("Goodbye!");

list.traverse();
list.reverse();
console.log("reversing................");
list.traverse();
