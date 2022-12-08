/* desarroollar una funcion que reciba 2 numeros como parametro 
analizar si el primero es par , retornar la suma
caso contrario retornar la resta */

/*function sumarSiesParA(a,b) {
    if (a %2 == 0) {
        return a + b 
        }else{
                return a - b
            }
        }

        console.log(sumarSiesParA(2,5));
        console.log(sumarSiesParA(3,4));

-----------------------------------------------------------------------------*/

/* Obtener un nuevo array con las edades menores a 18 

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]; 

function obtenerMenores(arrayEdades) {
        let menores = []

        for (let i = 0; i < arrayEdades.length ; i++) {
        
            if (arrayEdades[i] < 18) {
                menores.push(arrayEdades[i])
            }
        
    }
    return menores
}
console.log(obtenerMenores(edades)); 

-----------------------------------------------------------------------------*/

/* Obtener un nuevo array con las edades mayores o iguales a 18 

function obtenerMayores(arrayEdades) {
        let mayores = []

        for (let i = 0; i < arrayEdades.length ; i++) {
        
            if (arrayEdades[i] > 18) {
                mayores.push(arrayEdades[i])
            }
        
    }
    return mayores
}
console.log(obtenerMayores(edades)); 

function obtenerIguales(arrayEdades) {
    let iguales = []

    for (let i = 0; i < arrayEdades.length ; i++) {
    
        if (arrayEdades[i] == 18) {
            iguales.push(arrayEdades[i])
        }
    
}
return iguales
}
console.log(obtenerIguales(edades)); 
-----------------------------------------------------------------------------*/


/* Crear un funcion que incremente

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]; 
console.table(edades); 

    function incrementar(arrayEdades) {
        for (let i = 0; i < arrayEdades.length; i++) {
            arrayEdades[i]++
        }
    }
    incrementar(edades)
    console.table(edades); 

-----------------------------------------------------------------------------*/

/* Obtener un nuevo Array de cuentas cuyas edades sean menores a 30*/

const arrayCuentas =
[
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.40,
    edadTitular: 33,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
    },
    {
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente"
    }
]

console.table(arrayCuentas); 

function menoresaTreinta(arrayCuentasParan) { 
    let menores = []

    for (let i = 0; i < arrayCuentasParan.length; i++) {
        if (arrayCuentasParan[i].edadTitular < 30) { 
            menores.push(arrayCuentasParan[i])
        }
        
    }
    return menores
}

/*console.log(menoresaTreinta(arrayCuentas));*/



/*Obtener un array con las cuentas habilitidadas

function cuentasHabilitadas(arrayCuentas) {
    let cuentasHab = []

    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada == true) {
            cuentasHab.push(arrayCuentas[i])
        }
    }
    return cuentasHab
}
console.table(cuentasHabilitadas(arrayCuentas));*/


/*Obtener un array con las cuentas deshabilitadas.
function cuentasDeshabilitadas(arrayCuentas) {
    let cuentasDeshab = []

    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada == false) {
            cuentasDeshab.push(arrayCuentas[i])
        }
    }
    return cuentasDeshab
}
console.table(cuentasDeshabilitadas(arrayCuentas));*/


/* Obtener la cuenta con el menor saldo.*/

function menorSaldo(arrayCuentas) {

    let menorCuenta = arrayCuentas[0]

    for (let i = 0; i < arrayCuentas.length; i++) {
        
        if (menorCuenta.saldo > arrayCuentas[i].saldo) {
            menorCuenta = arrayCuentas[i]
            

            
        }
        
    }
return menorCuenta
}

console.table(menorSaldo(arrayCuentas));

/*Obtener la cuenta con el mayor saldo.*/

function mayorSaldo(arrayCuentas) {

    let mayorCuenta = arrayCuentas[0]

    for (let i = 0; i < arrayCuentas.length; i++) {
        
        if (mayorCuenta.saldo < arrayCuentas[i].saldo) {
            mayorCuenta = arrayCuentas[i]
            
        }
        
    }
return mayorCuenta
}

console.table(mayorSaldo(arrayCuentas));