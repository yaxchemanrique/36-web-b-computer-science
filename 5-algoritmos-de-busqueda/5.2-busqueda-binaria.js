function binarySearch(arr, t) {
  let inicio = 0;
  let fin = arr.length - 1;

  while(inicio <= fin) {
    let mitad = Math.floor((inicio + fin)/2) //Math.ceil
    if(arr[mitad] === t) {
      return mitad;
    }
    else if(arr[mitad] < t) {
      inicio = mitad + 1;
    }
    else {
      fin = mitad - 1;
    }
  }
  return -1;
}

const array1 = [9, 18, 29, 38, 47, 53, 69, 72, 82, 91, 104];
// debugger
const index1 = binarySearch(array1, 18);
console.log(index1)

