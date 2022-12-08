/*Ejercicio1: Creando un objeto literal
Vamos a ver cómo crear nuestro objeto "perro":

Declarar una variable llamada perro de tipo objeto literal.
Esa variable debe tener 3 propiedades:

1. nombre, con un valor de tipo String.
2. edad, con un valor de tipo Number.
3. vacunado, con un valor de tipo Boolean. */

let  perro ={
    nombre:"julieth",
    edad:20,
    vacunado:true
}

/*Ejercicio 2: Objetos entrenadores
Vamos a reforzar el concepto de un objeto literal tratando de representar un deportista y pedirle que entrene.
Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: 
nombre, energia, experiencia.

Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función 
entrenarHoras.

La función entrenarHoras tiene las siguientes tres características:

Recibe por parámetro la cantidad de horas.
Resta a su energía (this.energia) la cantidad de horas x 5.
Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia
 del deportista por consola. */

 let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantHoras){
     this.energia = this.energia - cantHoras * 5
     this.experiencia = this.experiencia + cantHoras * 2
    }
};

console.log (deportista.energia);
console.log (deportista.experiencia);

deportista.entrenarHoras(2)

console.log (deportista.energia);
console.log (deportista.experiencia);

/*
console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
*/




 // ejemplo de video explicativo

 let persona ={
     nombre: "julieth",
     edad:20,
     altura:1.60,
     pais:"colombia",
     notificacion:function(){
        return "hola"+ " " +this.nombre;
     }
 }

 console.log (persona.notificacion());
 console.log (persona.edad);