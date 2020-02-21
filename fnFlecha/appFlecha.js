const c = console.log
c(`inicio`)
const r = require(`./soporte.js`) //de esta forma llama completo al archivo soporte.js
c(r.suscr01)
c(r.suscr02)
//
//las dos lineas debajo son equivalentes
r.sal01
//r.sal02() //conflicto con module.exports = {...
c(r.subs)
r.saludar3()
let respuesta = r.sumar(10,2)
c(respuesta)
c(r.multiplicar(3,5))
c(r.mostrar(8))

setTimeout(() => {
    c(`termino`)
}, 2000);
