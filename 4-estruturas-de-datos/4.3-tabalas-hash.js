class HashTable {
  constructor(size = 7) {
    // dataMap -> tabla
    this.dataMap = new Array(size);
    // console.log(this.dataMap)
  }
  
  _hash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
      // console.log(hash + key.charCodeAt(i) * 23)
      // console.log((hash + key.charCodeAt(i) * 23) % this.dataMap.length)
    }
    
    return hash;
  }

  printTable() {
    for (let i = 0; i < this.dataMap.length; i++) {
      console.log(i, ': ', this.dataMap[i])
    }
  }

  set(key, value) {
    let renglon = this._hash(key);
    // if(!arreglo[renglon])      arreglo[renglon] = [];
       if(!this.dataMap[renglon]) this.dataMap[renglon] = [];

    const newDataSet = [key, value]
    // arreglo[renglon].push(newDataSet) 
       this.dataMap[renglon].push(newDataSet)
  }

  get(key) {
    let renglon = this._hash(key);
    if(!this.dataMap[renglon]) return undefined;

    for (let i = 0; i < this.dataMap[renglon].length; i++) {
      if(this.dataMap[renglon][i][0] === key) {
        return this.dataMap[renglon][i][1]
      } 
      return undefined
    }
  }

  keys(){
    // Imprimir en un arreglo todas las llaves de mi tabla hash,
    // en este caso, debería imprimir: 
    // [harina, queso, huevo, leche, tortillas]
  }
}
/* 
1 : [
      ['harina', 100],
      ['queso', 6]
    ]
//                                 0               1
this.dataMap[renglon] =  [['harina', 100], ['queso', 6]]
//                          0         1       0       1
arr =  [['harina', 100], ['queso', 6]]

console.log(this.dataMap[renglon][1][0]) // 'queso' */

const ht = new HashTable(7)
// const ht2 = new HashTable(17)

ht.set('harina', 100)
ht.set('huevo', 75)
ht.set('queso', 6)
ht.set('tortillas', 86)
ht.set('leche', 83)

ht.printTable()

/* 15 / 2 = 7 Res 1
15 / 4 = 3 Res 3  */


// [[huevo, 75], [], [], [], [harina, 100], [], []...]