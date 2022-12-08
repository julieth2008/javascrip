/* 
* Bubble Sort  🗯️
*/
let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

console.table(personas);
/* 
Considerando la colección de personas que te presentamos en la demostración anterior, te proponemos el siguiente desafío:

*¿Cómo podrías ordenar la colección, de menor a mayor ASC, considerando solo la estatura? 

*¿Cómo podrías ordenar la colección, de mayor a menor DESC, considerando solo la estatura? 

Utiliza bubble sort.
*/


const bubbleSortAsc = (arrayPersonas) =>{

    for (let i = 0; i < arrayPersonas.length; i++) {

        for (let j = 0; j < arrayPersonas.length - 1; j++) {
           
            if (arrayPersonas[j].estatura >  arrayPersonas[j + 1].estatura) {
                
                let aux = arrayPersonas[j]; 
                arrayPersonas[j] = arrayPersonas[j + 1];
                arrayPersonas[j + 1] = aux
            }
        }
    }
}


const bubbleSortDesc = (arrayPersonas) =>{

    for (let i = 0; i < arrayPersonas.length; i++) {

        for (let j = 0; j < arrayPersonas.length - 1; j++) {
           
            if (arrayPersonas[j].estatura <  arrayPersonas[j + 1].estatura) {
                
                let aux = arrayPersonas[j]; 
                arrayPersonas[j] = arrayPersonas[j + 1];
                arrayPersonas[j + 1] = aux
            }
        }
    }
}
console.log('ordenando...');

bubbleSortDesc(personas)

console.table(personas);
