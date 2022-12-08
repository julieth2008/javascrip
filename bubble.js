// ejemplo de play group video

let listacartas = [6,3,5,8,1,2,4,9,7];
// este es el ciclo a evaluar
//segun tantos elementos tengamos
for (let i = 0; i < listacartas.length; i++) {
    // y este es nuestro ciclo para comparar posicion actual
    //con la siguiente es decir:
    for (let j = 0; j < listacartas.length; j++) {
      if (listacartas[j] > listacartas[j + 1]) {
        // si la siguiente es mayor,intercambiamos posiciones
      }
        
    }
    
}


// console.log (listacartas); 

// ejemplo profesor 

const numeros = [5, 1, 4, 2, 8];
function bubbleSort(array){
    //let contador =  0;
    for (let i = 0; i < array.length; i++) { // n = 5

        for (let j = 0; j < array.length - 1; j++) { // n = 5
           //console.log('iteracion: ' + contador);

            if (array[j] > array[j + 1]) {
                //swapping
              let aux = array[j];
              array[j] = array[j + 1];
              array[j + 1] = aux;    
            }
           // contador++
        }

    }

}



//bubbleSort(numeros)

//console.log(numeros); 


// ejercicio propio 
let num = [20,45,1,3,6,9,58,6,2,3,7]


function buble (array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
        if (4444> array[j + 1]) {
            
            let aux = array[j] 
            array[j] =  array[j + 1]
            array[j + 1] = aux
        }
            
        }
        
    }
}

buble (num)
console.log (num);

