function linearSearch(arr, t) { //parametros
  console.log(arguments)
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === t) {
      return i;
    }
  }
  return -1;
}

const array1 = [2, 98, 82, 23, 67, 903]
const array2 = [78, 89, 9021, 28]

// debugger
const index1 = linearSearch(array1, 67); // argumentos
const index2 = linearSearch(array2, 9); // argumentos
/*
function linearSearch(array1, 67) { 
  for (let i = 0; i < array1.length; i++) {
    if(array1[i] === 67) {
      return i;
    }
  }
  return -1;
}
*/
console.log(index1)

//? Regresamos 8:19