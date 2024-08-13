/* 
* 1. Funcion Contructora
* 2. Clases de ES06
* 3. Object.create()
*/

/* 
* Datos primitivos // NO son Objetos!
  * numeros
  * strings
  * booleans 
*/

const arr = [1, 3, 4, 6, 8]
// console.log(arr);

function sayHi(){
  console.log('Hi')
}
// console.dir(sayHi);

const user = {
  // key - value
  // llave/propiedad - valor
  username: 'YaxcheManrique',
  password: 'contrasena',
  email: 'yaxche@mail.com',
  isPremium: true,
  age: 2024 - 1993,

  sayHello: function() {
    console.log(`Hola, mi nombre es ${user.username}`);
  }
}

user.fullName = 'kjasdbjabs'
// console.log(user)
// user.sayHello()

arr.push(7)
// console.log(arr)

// CLASE
const Person = function (firstName, birthYear) {
  // console.log(this)
  this.firstName = firstName;
  this.birthYear = birthYear;

  // MUUUUUy mala práctica
  /* this.calcAge = function () {
    console.log(`La edad de ${this.firstName} es ${2024 - this.birthYear}`)
  } */
}

Person.prototype.calcAge = function () {
  console.log(`La edad de ${this.firstName} es ${2024 - this.birthYear}`)
}

// Instancia
const samuel = new Person('Samuel', 2005)
/* 
* 1. const samuel = {}
* 2. const samuel = this = {}
  * this.firstName -> samuel.firstName = 'Samuel'
  * this.birthYear -> samuel.birthYear = 2005
*/
const yaxche = new Person('Yaxche', 1993)
const ian = new Person('Ian', 2001)
console.log(yaxche)
console.log(ian)
console.log(samuel)

// yaxche.calcAge();
// ian.calcAge();
// samuel.calcAge();

/* 
* 1. Se crea un objeto vacío {}
* 2. this = {} y Se ejecuta la funcion constructora Person 
* 3. {} se liga al prototipo
* 4. la funcion constructora retorna el objeto creado
*/


arr.push(6)
console.log(arr)