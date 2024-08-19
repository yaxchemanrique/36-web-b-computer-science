//Funcion constructora
const PersonFuncion = function (firstName, birthYear) {
  // console.log(this)
  this.firstName = firstName;
  this.birthYear = birthYear;

  // MUUUUUy mala práctica
   this.calcAge = function () {
    console.log(`La edad de ${this.firstName} es ${2024 - this.birthYear}`)
  } 
}

Person.prototype.calcAge = function () {
  console.log(`La edad de ${this.firstName} es ${2024 - this.birthYear}`)
}

// Clases ES06
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(`La edad de ${this.firstName} es ${2024 - this.birthYear}`)
  }

  introduce() {
    console.log(`Hola, mi nombre es ${this.firstName}`)
  }
}

const yaxche = new Person('Yaxche', 1993);
console.log(yaxche)
console.log(yaxche.firstName)
yaxche.calcAge();
yaxche.introduce();

const mariano = new Person('Mariano', 2005)
console.log(mariano.firstName)
mariano.introduce()