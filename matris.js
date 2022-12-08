let array = [
    [1,2,3,4,5],
    [1,2,3,4,6],
    [1,2,3,4,17]
]

function suma(arrays) {
    for (let f = 0; f < arrays.length;f++) {
        let sum = 0;
        for (let c= 0; c < arrays[f].length; c++) {
            sum +=arrays[f][c]

        }
        return sum
    }

}

//console.log(suma(array))


let matri= new Array()
for (let i = 0; i <=10; i++) {
    matriz[i]= new Array();

    for (let index = 0; index <=10 ; index++) {
        matriz[i] [index]= index;
        
    }
    
}

//console.table(matriz);
console.log(matriz);


 /* recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.*/   
let aju=[
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
  ];

// sumar un solo array dentro de la matriz
  function suma(arrays) {
    for (let f = 0; f < arrays.length;f++) {
        let sum = 0;
        for (let c= 0; c < arrays[f].length; c++) {
            if (arrays[f][c] >= 10 && arrays[f][c] < 1000) {
                sum +=arrays[f][c]
            }
        }
        return sum
    }

}
//console.log(suma(aju));  
let matriz = [

    [1,2,3,4,5],
    [6,7,8,9,9],
    [1,3,5,7,9],
    [0,2,4,6,8],
    [1,2,4,5,7],
 ]
 //console.table(matriz)
 
 /**
  * Luego, escribe un algoritmo para sumar todos
  * los numeros en la matriz.
  */
 
 let suma = 0
 function sumatotal ([]) {
    for (let i = 0; i < matriz.length; i++) {
       
       //console.log(matriz[i]);
       for (let j = 0; j < matriz[i].length; j++) {
          //console.log(matriz[i][j]);
        suma = suma + matriz[i][j]
        
    } 
    
    }
    return suma
 }
//console.log(sumatotal([matriz]));



    /* Declara una variable que contenga una matriz
     de 5x5 llena de puros numeros enteros y positivos
    */
   let enteros = [
     [4, 5, 7, 9, 5],
     [3, 2, 5, 8, 7],
     [5, 9, 3, 0, 4],
     [1, 3, 8, 7, 4],
     [3, 1, 7, 8, 9]
   ];
   
   let suma = 0;
   for (let f = 0; f < enteros.length; f++) {
     for (let c = 0; c < enteros[f].length; c++) {
       suma = suma + enteros[f][c];
     }
   }
   //console.log(suma);
   /**
    * Luego, escribe un algoritmo para sumar todos
    * los numeros en la matriz.
    */

    let numeros = [
        [10, 3, 2, 1, 4, 7],
        [5, 5, 10, 100, 4],
        [5, 125, 10, 1020, 4],
        [5, 5, 5097, 100, 4]
      ];
      
      /**
       * Suma los valores que sean mayores
       * o iguales a 10, pero menor a 1000.
       */
      
      // sumar todos los array
      let suma = 0;
      
      for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
          if (numeros[i][j] >= 10 && numeros[i][j] < 1000) {
            suma += numeros[i][j];
          }
        }
      }
      
     // console.log(suma);