let objeto = [
    {
        nombre:"julieth",
        apellido:"vera",
        edad:20,
    },
    {
        nombre:"ximena",
        apellido:"sanchez",
        edad:21,
    },
]

// listar todos los apellido
    
for (let index = 0; index < objeto.length; index++) {
//console.log (objeto[index].apellido);
    
}

//solo las personas mayores a 20 años
for (let index = 0; index < objeto.length; index++) {
   
    if (objeto[index].edad > 20) {
   // console.log (objeto[index].nombre);   
    }        
}

// listar en orden por nombre de forma ascendente 
function ordenar(array) {
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length -1; j++) {
         if (array[j].nombre < array[j + 1].nombre ) {
            let aux = array[j]
            array[j] = array[j + 1]
            array[j + 1] = aux;
         }
            
        }
        
    }
}    

ordenar(objeto)

console.log (objeto);
