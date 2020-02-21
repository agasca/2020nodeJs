const c = console.log
c(module)
c(`inicio soporte`)
let suscriptores = 22000
//module.exports
module.exports.suscr01 = suscriptores
module.exports.suscr02 = 23000

//
//funciones
//opcion01
function saludar(){
    c(`Hola01 :)`)
}
module.exports.sal01 = saludar()
//
//opcion02
module.exports.sal02 = function(){
    c(`Hola02 :)`)
}
//
//opcion 3 funcion flecha
module.exports = {
    subs : suscriptores,
    saludar3: ()=>{
        c(`Hola!!!`)
    },
    sumar: (a,b)=>{
        //bolque de codigo
        return a + b
    },
    multiplicar: (a,b)=> a * b, //una sola operacion
    mostrar: a => a + 10 //solo necesitamos de un unico valor no es necesario los parentesis
}
c(`termino soporte`)