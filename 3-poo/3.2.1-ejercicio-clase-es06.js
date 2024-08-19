class Carro {
  constructor(velocidad, marca, modelo) {
    this.velocidad = velocidad;
    this.marca = marca;
    this.modelo = modelo;
  }

  acelera() {
    this.velocidad += 10;
    console.log(`Acelera \n La velocidad del ${this.marca} es de ${this.velocidad} km/h `)
  }

  frena() {
    if (this.velocidad - 5 <= 0) {
      console.log(`Frena \n La velocidad del ${this.marca} es de 0 km/h `);
      this.velocidad = 0;
    } else {
      this.velocidad -= 5;
      console.log(`Frena \n La velocidad del ${this.marca} es de ${this.velocidad} km/h `)
    }
  }
}

const bmw = new Carro(20, "BMW", 2005);
console.log(bmw);
//bmw.acelera();
//bmw.acelera();
//bmw.acelera();
//bmw.frena();
//bmw.frena();
//bmw.frena();
//bmw.frena();
//bmw.frena();
//bmw.frena();
//bmw.frena();
//bmw.frena();
//bmw.frena();

//* Como funciona el return

const parrafo = document.querySelector('#edad');

function calcularEdad(anioNacimiento) {
  /*console.log(edad)
  parrafo.textContent = edad*/
  return 2024 - anioNacimiento;
}

const edadFulano = calcularEdad(2005)
parrafo.textContent = edadFulano
console.log(edadFulano)