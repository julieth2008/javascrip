/* 
*CIERRE C21
*/

/* 
Desarrollar una función que reciba un array e
indique si se encuentran ordenados de
menor a mayor ASC o no.
a. si están ordenados retornar true
b. caso contrario retorna false

ejemplos de arrays
[4,9,2,5,6,7,1,2] // false
[1,2,3,4,5,6,7,8] // true

*/

let arrayO = [1, 2, 3, 4, 5, 6, 7, 8]; // true

let arrayD = [4, 9, 2, 5, 6, 7, 1, 2]; // false

const estaOrdenado = (array) => {

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }
    return true
}

/* console.log(estaOrdenado(arrayD)); // false

 console.log(estaOrdenado(arrayO)); // true */



/* 
Desarrollar una función que genere una matriz,
 deberá recibir por parámetros la
cantidad de filas y columnas y retornar la matriz 
con valores secuenciales numéricos.
*/

function generarMatriz(filas, columnas) {
    let matriz = []
    let elementosSec = 1
    for (let i = 0; i < filas; i++) {
        matriz.push([])

        for (let j = 0; j < columnas; j++) {
            matriz[i].push(elementosSec)
            elementosSec++
        }

    }

    return matriz
}

// console.table(generarMatriz(10,10));


/* let matriz2x2 =
[
    [1,2],
    [3,4]
]
console.table(matriz2x2); */

/* 

*/
const personas =
    [
        {
            nombre: "Arlene Barr",
            legajo: 3955,
            edad: 33,
        },
        {
            nombre: "Roslyn Torres",
            legajo: 3925,
            edad: 27,
        },
        {
            nombre: "Cleo Lopez",
            legajo: 1965,
            edad: 34,
        },
        {
            nombre: "Daniel Malone",
            legajo: 3925,
            edad: 30,
        },
        {
            nombre: "Ethel Leon",
            legajo: 1915,
            edad: 34,
        },
        {
            nombre: "Harding Mitchell",
            legajo: 1905,
            edad: 25,
        }
]
console.table(personas);

const orderAsc = (arrayPersonas) => {
    
    for (let i = 0; i < arrayPersonas.length; i++) {
        
        for (let j = 0; j < arrayPersonas.length - 1; j++) {
           
           if (arrayPersonas[j].legajo > arrayPersonas[j + 1].legajo) {
            let aux = arrayPersonas[j];
            arrayPersonas[j] = arrayPersonas[j + 1];
            arrayPersonas[j + 1] = aux;
           }
            
        }
    }
}

/* orderAsc(personas);

console.table(personas); */