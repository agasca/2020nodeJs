console.log(`Inicio del archivoprueba.js`)
console.log(module)
//
//exportar el o mas valores
let ejemploOut1 = 2201
let ejemploOut = 220
//module.exports.ejemploO = 23000
module.exports.ejemploO = ejemploOut

//
//funciones
function saludar(){
    console.log("esta es una prueba correcta!!!01")
}
//exportar con funcion
module.exports.saludado = saludar()

//
//funcion embenida
module.exports.saludo = function(){
    console.log("esta es una prueba correcta!!!02")
}

//
module.exports = {
    subs: ejemploOut1,
    salute : function(){
        console.log(`Hello world`)
    }
}


//
//funcion flrecha
module.exports = {
    subs: ejemploOut1,
    salute : () => {
        console.log(`Hello world`)
    },
    sumar: (a,b) => {
        return a + b
    }, 
    multiplicar: (c,d) => c*d,
    mostrar: a => a +10
}