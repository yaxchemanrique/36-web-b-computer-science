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
    console.log('La Cabeza de esta LL es: ', this.head);
  }

  getTail() {
    console.log('La cola de esta LL es: ', this.tail);
  }

  getLength() {
    console.log("La longitud de esta lista es de", this.length);
  }

  push(value) {
    // validacion extra: this.length === 0
    const nodo = new Node(value);
    this.tail.next = nodo;
    this.tail = nodo;
    // this.length = this.length + 1;
    this.length += 1;

    return this.length;
  }

  pop() {
    if(this.length === 0) return 'ehhh we, ya no hay que quitar!';

    let temp = this.head;
    let pre = this.head;
    while(temp.next !== null) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    // this.length = this.length - 1
    // this.length -= 1;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp
  }

  unshift(value) {
    /*
    // 1. creamos el nuevo nodo que vamos a insertar
    const nodo = new Node(value);
    // conectamos el nodo creado con la lista que ya tenemos
    nodo.next = this.head;
    // Actualizamos qué nodo es la cabeza
    this.head = nodo;
    this.length++;
    */

    // Falta una validación donde la lista esté vacia
    const nodo = new Node(value);

    if(this.head === null) { //this.lenght === 0
      this.head = nodo;
      this.tail = nodo;
    } else {
      nodo.next = this.head;
      this.head = nodo;
    }
    this.length++;

    return this.length;
  }

  shift() {
    if(this.length === 0) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    this.length--;

    if(this.length === 0 ) {
      this.tail = null
    }

    temp.next = null;

    return temp;
  }

  get(index) {
    if(typeof index !== 'number') return undefined;
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for(let i = 0 ; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    // if(temp !== null || temp !== undefined || temp !== '' || temp !== 0 || temp !== NaN) {
    if(temp) {
      temp.value = value;
    }

    return temp;
  }

  insert(index, value) {
    if(typeof index !== 'number') return undefined;
    if (index < 0 || index > this.length) return undefined;

    if(index === 0) return this.unshift(value);
    if(index === this.length) return this.push(value);

    const nodo = new Node(value);
    const pre = this.get(index - 1);
    const post = this.get(index);
    pre.next = nodo;
    nodo.next = post;
    this.length++;

    return this.length;
  }

}
/* 
Implementar los siguientes métodos para una lista ligada:
* ✅ unshift(value): Agrega un nuevo nodo con el valor value al inicio de la lista.
* ✅ shift(): Elimina y retornar el primer nodo de la lista.
* ✅ get(index): Devuelve el nodo en la posición index de la lista.
* ✅ set(index, value): Cambia el valor del nodo en la posición index al valor value.
* insert(index, value): Inserta un nuevo nodo con el valor value en la posición index de la lista.
 */

const ll = new LinkedList(11);
console.log(ll)
ll.push(3)
ll.push(23)
ll.push(7)
ll.push(4)
ll.printList()
// console.log(ll.length)

ll.getHead();
ll.pop()
ll.printList();

console.log('Método unshift--------------------');
ll.unshift(0);

ll.printList();

ll.unshift(35);

/* const lista = {
  head: 'cabeza',
  tail: {},
  length: 5
}
console.log(lista.head) // 'cabeza' */