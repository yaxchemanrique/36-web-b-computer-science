class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

 const nodo1 = new Node(5);
 const nodo2 = new Node(8);
 /* 
 * nodo2 -> {} -> this
 * nodo2.value = 5
 * nodo2.next = null
 */
// nodo1.next = nodo2
// console.log(nodo1)

class LinkedList {
  constructor(value) {
    // head, tail
    const nodo = new Node(value);
    this.head = nodo;
    this.tail = nodo;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while(temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    console.log('La Cabeza de esta LL es: ', this.head)
  }

  push(value) {
    const nodo = new Node(value);
    this.tail.next = nodo;
    this.tail = nodo;
    // this.length = this.length + 1;
    this.length += 1;
  }
}

const ll = new LinkedList(11);
console.log(ll)
ll.push(3)
ll.push(23)
ll.push(7)
ll.push(4)
ll.printList()
console.log(ll.length)

ll.getHead();

const lista = {
  head: 'cabeza',
  tail: {},
  length: 5
}
console.log(lista.head) // 'cabeza'