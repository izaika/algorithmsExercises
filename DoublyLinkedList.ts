import { log } from "./uitls";

namespace DoublyLinkedList {
  class Node {
    prev: Node = null;
    next: Node = null;

    constructor(public val: any) {}
  }

  class DoublyLinkedList {
    head: Node = null;
    tail: Node = null;
    length = 0;

    push = (val: any) => {
      const newNode = new Node(val);

      if (!this.length) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;

      return this;
    };

    pop = () => {
      if (!this.length) return;
      const removedNode = this.tail;
      if (this.length === 1) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        removedNode.prev = null;
      }
      this.length--;
      return removedNode;
    };

    unshift = (val: any) => {
      const newNode = new Node(val);
      if (!this.length) {
        this.head = this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    };

    shift = () => {
      if (!this.length) return;
      const removedNode = this.head;
      if (this.length === 1) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
        removedNode.next = null;
      }
      this.length--;
      return removedNode;
    };
  }

  const list = new DoublyLinkedList();
  list.push(99);
  list.push(100);
  list.push("last item");

  list.unshift(98);
  log(list);
}
