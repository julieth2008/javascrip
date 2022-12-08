/*En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—. */

let array = [12,23,43,23,10,9,8,7,5,4,30,88,99,38,90];

function buble (array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
        if (array[j] < array[j + 1]) {
            
            let aux = array[j] 
            array[j] =  array[j + 1]
            array[j + 1] = aux
        }
            
        }
        
    }
}

//buble (array)
//console.log (array);

/*El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor. */


let meteorológico = [
    {
        dia: 10,
        mes:2,
        max:29,
        min:11,
    },
    {
        dia: 23,
        mes:4,
        max:44,
        min:3,
    },
    {
        dia: 31,
        mes:12,
        max:15,
        min:9,
    },
    {
        dia: 7,
        mes:8,
        max:21,
        min:3,
    },
]

function ordenar(tem){
    for (let i = 0; i < tem.length; i++) {
        for (let j = 0; j < tem.length - 1; j++) {
        if (tem[j].min > tem[j + 1].min) {
            
            let aux = tem[j] 
            tem[j] =  tem[j + 1]
            tem[j + 1] = aux
        }
            
        }
        
    }
}
console.table(meteorológico)
ordenar(meteorológico)
console.table (meteorológico);


function orden(maxima){
    for (let i = 0; i < maxima.length; i++) {
        for (let j = 0; j < maxima.length - 1; j++) {
        if (maxima[j].max < maxima[j + 1].max) {
            
            let aux = maxima[j] 
            maxima[j] =  maxima[j + 1]
            maxima[j + 1] = aux
        }
            
        }
        
    }
}

console.table(meteorológico)
orden(meteorológico)
console.table (meteorológico);
