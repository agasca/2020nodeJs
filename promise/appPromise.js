let c = console.log
/*
//ejemplo 1
let promesa = new Promise((resolve, reject)=>{
    //resolve(`Exito al proceso`)
    reject(`Sin exito al proceso`)
})

promesa.then((resultado)=>{
    c(resultado)
},(error)=>{
    c(error)
})
*/

//ejemplo 2
let prom = require(`./promesa.js`)
prom.calcular(1,2).then((resultado)=>{
        c(resultado)
    }, (error)=>{
        c(error)
})
