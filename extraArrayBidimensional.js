/* 
Dejo algunos ejercicios extras de array bidimensional
Cualquier consulta me etiquetan 🧉
*/

let matriz = [
    [14, 11, 15],   // indices --> 0
    [24, 34, 22],  // indices --> 1
    [33, 30, 21]  // indices --> 2
]

/* console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);
 */


/* 
1 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos pares
*/

function pares(matriz) {
    let arrayPares = [];

    for (let i = 0; i < matriz.length; i++) {
        const fila = matriz[i]; //  [14, 11, 15]
        for (let j = 0; j < fila.length; j++) {
            const elementoFinal = fila[j];  
            
            if (elementoFinal % 2 === 0) {
                arrayPares.push(elementoFinal)
            }
        } 
    }
    return arrayPares
}

// console.log(pares(matriz));

/* 
2 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos impares
*/



/* 
3 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos mayor a 20
*/

function mayor(matriz) {
    let arrayMayor = [];

    for (let i = 0; i < matriz.length; i++) {
        const fila = matriz[i]; //  [14, 11, 15]
        for (let j = 0; j < fila.length; j++) {
            
            const elementoFinal = fila[j];  
            if (elementoFinal > 20) {
                arrayMayor.push(elementoFinal)
            }
            
        } 
    }
    return arrayMayor
}

// console.log(mayor(matriz));


/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/

function arrayDiagonal(matriz) {
    let arrayDiagonal = []
    for (let i = 0; i < matriz.length; i++) {
        arrayDiagonal.push(matriz[i][i])    
    }
    return arrayDiagonal;
}
console.log(arrayDiagonal(matriz));


/* 
5 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar la suma de la diagona principal
*/
function sumarDiagonal(matriz) {
    let sumatoria = 0
    for (let i = 0; i < matriz.length; i++) {
        sumatoria = sumatoria + matriz[i][i]    
    }
    return sumatoria;
}
console.log(sumarDiagonal(matriz));
