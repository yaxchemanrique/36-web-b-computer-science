//? Parámetros por defecto

let username = 'YaxcheManrique';

function sayHi(user = 'usuario genérico') {
  console.log(`Hi, ${user}`)
}

sayHi();
sayHi(username);
sayHi('Ian');

//? Destructuring de Objetos
// (better comments)
let user = {
  fullName: 'Yaxche Manrique',
  email: 'yaxche@mail.com',
  googleAccount: '2135FS-6325FDAS-HSGD7'
}

console.log(`Hola ${user.fullName}`)
// Hola Yaxche Manrique

const { fullName: userName, email, googleAccount } = user;
// console.log(fullName)
console.log(userName)
console.log(email)
// console.log(googleAccount)

//? Desctructuring de Arreglos
let users = [
  {
    fullName: 'Yaxche Manrique',
    email: 'yaxche@mail.com',
    googleAccount: '2135FS-6325FDAS-HSGD7'
  },
  {
    fullName: 'Leonardo Argüello',
    email: 'leonardo@mail.com',
    googleAccount: '2135FS-dyaugy6756-HSGD7'
  }
]
console.log(users)

let [user1, user2] = users;

// console.log(user1)
console.log(user2)

user1.fullName = 'Yaxche';
user1.isPremium = true;

console.log(user1)

// Funciones como declaración
function myFunction() {
  // body de la funcion
}
myFunction();

// funciones como expresiones 
const myFunction1 = function () {
  // body de la funcion
}
myFunction();

// funciones flecha
const arrowFunction = () => {
  // body de la funcion
}

/* function sayHi(user = 'usuario genérico') {
  console.log(`Hi, ${user}`)
} */

const sayHi1 = function(user) {
  console.log(`Hi, ${user}`)
}

// Diferencia: THIS
const sayHi2 = (user) => {
  console.log(`Hi, ${user}`)
}

const sayHi3 = (user) => console.log(`hi ${user}`);

// Funcion en forma de declaracion
function calcAge(birthYear) {
  console.log(`Tienes ${2024 - birthYear} años`)
}

calcAge(1993)

// Funcion como expresion
// Funcion flecha

// Parentesis: Expresiones vs declaraciones
// Statements vs expressions

/* 8
7*5

let number = 10;
6>2

if(6 > 2) {
  console.log('shbd')
}

console.log(8*6)
console.log('hola')
console.log(users)

`${8*6} mi nombre es ${nombre}` */