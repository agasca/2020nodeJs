const os = require('os')

//importar mis archivos
const mi = require('./prueba.js')

//declaraciones
let cpu = os.cpus()
let sistema = os.platform()
let usuario = os.hostname()

/**
 *console.log(usuario) 
 *console.log(cpu) 
 *console.log(sistema) 
 */

//
//ejemplo de llamado sin function
console.log(mi.ejemploO) 
mi.saludado
//mi.saludo()   //conflicto con la linea debajo
mi.salute()
let c = console.log
let res = mi.sumar(10,5)
c(res)
res = mi.multiplicar(2,3)
c(res)
res = mi.mostrar(8)
c(res)
setTimeout(()=>{
    c("termine")
},3000)