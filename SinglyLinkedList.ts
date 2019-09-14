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
    this.length++;

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

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

    if (!this.length) this.head = this.tail = null;

    return current;
  };

  traverse = () => {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  };
}

const list = new SinglyLinkedList();
list
  .push("Hello")
  .push("there")
  .push("test")
  .push("Goodbye!");
