const arr1 = ['a', 'b', 'c', 'd', 'e'];

/* for(let i = 0; i<arr1.length; i++) {
  const x = arr1[i]
  console.log(x);
} */

for(let x of arr1) {
  // console.log(x);
}

const precios = [18, 12.99, 28, 98, 27.6];
let total = 0;

for(let precio of precios) {
  console.log(`total: ${total}, precio: ${precio}`);
  // total = total + precio;
  total += precio;
}

console.log(`El total a pagar es de ${total}`);

let user = {
  id: 1,
  name: 'Yaxche',
  isMillennial: true,
  noPets: 1,
  job: 'sensei',
  insta: 'YaxcheManrique'
}
console.log(user.id)
console.log(user.name)
console.log(user['isMillennial'])

for (let prop in user) {
  console.log(prop);
  console.log(user[prop]);
}

/* const prop = prompt('Que quieres saber del usuario?');
alert(user[prop] || 'Intenta otra'); */
