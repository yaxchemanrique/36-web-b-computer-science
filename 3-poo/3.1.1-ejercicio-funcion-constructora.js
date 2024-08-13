/*
Ejercicio: Función constructora
Usar una funcion constructora para implementar un Carro (Car).

Un carro tiene las propiedades de:
  * Velocidad Actual (km/h)
  * Marca
  * modelo

Implementar un método de aceleración, en donde cada vez que se ejecute el método aumente la velocidad en 10km/h. (Hacer un console.log de la velocidad actual)

Implementar un método de frenado, en donde cada vez que se ejecute el metodo, disminuya su velocidad en 5km/h. (Hacer un console.log de la velocidad actual)

Probar con dos carros
*/
const Car = function(velocidad, marca, modelo) {
  this.velocidad = velocidad;
  this.marca = marca;
  this.modelo = modelo;
}

const bmw = new Car(120, "BMW", 2005);
const mercedes = new Car(110, "Mercedes", 2010);
console.log(bmw)

Car.prototype.noLlantas = 4;

Car.prototype.acelera = function () {
  this.velocidad += 10;
  console.log(`ACELERAR \n La velocidad de este auto es de ${this.velocidad}km/h`)
}

Car.prototype.frena = function () {
  this.velocidad -= 5;
  console.log(`FRENAR \n La velocidad de este auto es de ${this.velocidad}km/h`)
}

bmw.acelera()
bmw.frena()
bmw.acelera()
bmw.acelera()
bmw.frena()

const obj1 = {
  no: 1,
  texto: 'Hola'
}

const obj2 = {
  no: 1,
  texto: 'Hola'
}

console.log(mercedes.__proto__)
console.log(bmw.__proto__)
console.log(mercedes.__proto__ === bmw.__proto__) //true
console.log(Car.prototype === mercedes.__proto__) //true
console.log(Car.prototype === bmw.__proto__) //true