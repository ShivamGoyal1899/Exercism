export class LinkedList {
  constructor() {
    this.head = {};
    this.tail = {};
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  push(data) {
    this.insert(data, this.lastNode());
  }
  unshift(data) {
    this.insert(data, this.head);
  }
  pop() {
    return this.del(this.lastNode());
  }
  shift() {
    return this.del(this.firstNode());
  }
  delete(data) {
    const node = this.find(data);
    if (node) this.del(node);
  }
  count() {
    return [...this.nodes()].length;
  }
  find(data) {
    for (const node of this.nodes()) {
      if (node.data === data) return node;
    }
  }
  insert(data, prev) {
    const next = prev.next;
    prev.next = next.prev = { data, prev, next };
  }
  del(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node.data;
  }
  *nodes() {
    for (let node = this.firstNode(); node !== this.tail; node = node.next) {
      yield node;
    }
  }
  firstNode() {
    return this.head.next;
  }
  lastNode() {
    return this.tail.prev;
  }
}
