function constant(n) {
  console.log(n);
  console.log(n);
}

//constant(2); //procesos:2
//constant(5); //procesos:2
//constant(10); //procesos:2

//Big O notation : O(2) -> tiempo constante

function lineal(n) {
  for(let i=0; i<n ; i++) {
    console.log(i)
  }
}
/*
console.log('==================')
lineal(3) //procesos: 3
console.log('==================')
lineal(5) //procesos: 5
console.log('==================')
lineal(10) //procesos: 10
*/
//Big O notation : O(n) -> tiempo lineal

function cuadratic(n) {
  let counter = 0;
  for(let i=0; i<n ; i++) {
    for(let j=0; j<n ; j++) {
      counter++;
      console.log(`${counter} \n i: ${i}, j: ${j}`);
    }
  }
}

console.log('==================')
//cuadratic(3) //procesos: 9 = 3*3 = 3^2
console.log('==================')
//cuadratic(5) //procesos: 25 = 5*5 = 5^2
console.log('==================')
//cuadratic(10) //procesos: 100 = 10^2

//Big O notation: O(n^2)

function cubic(n) {
  let counter = 0;
  for(let i=0; i<n ; i++) {
    for(let j=0; j<n ; j++) {
      for(let k=0; k<n ; k++) {
        counter++;
        console.log(`${counter} \n i: ${i}, j: ${j}, k: ${k}`);
      }
    }
  }
}

cubic(5) //procesos: 125 = 5*5*5 = 5^3 
//O(n^3)

function lineal1(n) {
  for(let i=0; i<n ; i++) {
    console.log(i)
  }

  for(let i=0; i<n ; i++) {
    console.log(i)
  }
}

lineal1(3) //procesos: 6
//O(n) + O(n) = O(n+n) = O(2n) ==> Drop contants --> O(n)

function lineal2(n) {
  for(let i=0; i<n ; i++) {
    console.log(i)
  }

  console.log(n)
  console.log(n)
  console.log(n)
  console.log(n)
}

lineal2(3) //7 procesos
//O(n+4) ==> Drop contants --> O(n)

function quadratic2(n) {
  for(let i=0; i<n ; i++) {
    console.log(i)
  }

  for(let i=0; i<n ; i++) {
    for(let j=0; j<n ; j++) {
      console.log(`i: ${i}, j: ${j}`);
    }
  }
}

//O(n + n^2) ==> Drop non dominants --> O(n^2)

function cubic2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log('algo extra');
}

// O(n^3 + n^3 + n + 1) = O(2 n^3) ==> O(n^3)


function logger(m, n) {
  //m veces
  for (let i = 0; i < m; i++) {
    console.log(i)
  }
  // n veces
  for (let j = 0; j < n; j++) {
    console.log(j)
  }
}

// O(m + n) Terminos separados