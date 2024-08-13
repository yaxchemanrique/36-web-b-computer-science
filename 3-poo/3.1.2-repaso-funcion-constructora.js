// Platillos

// Funcion Constructora:
const Platillo = function (categoria, nombre, descripcion, precio) {
  this.categoria = categoria;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.precio = precio;
}

// Instancia
const pastelChocolate = new Platillo('postres', 'Pastel de Chocolate', 'Delicioso Pastel de chocolate del Costco', 60);
const pieLimon = new Platillo('postres', 'Pie de Limon', 'Delicioso Pie de Limon del Costco', 60);
console.log(pastelChocolate)
console.log(pieLimon)

// Imprimir -> Agregar al DOM
Platillo.prototype.imprimir = function () {
  console.log(
    `${this.categoria} \n
    ${this.nombre}........... $${this.precio}
    ${this.descripcion}`)
}

Platillo.prototype.precioUber = 30;

pastelChocolate.imprimir()
pieLimon.imprimir()