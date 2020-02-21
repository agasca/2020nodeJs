let c = console.log
const _ = require('lodash')
//
//input
//let comando = process.argv[2]
//c(comando)
//para capturar valores habra que establecerlosy enviarlos desde la console
//node appLodash.js MiCodigo
//node appLodash.js Inscribirse

//yargs
//const argv = require(`yargs`)
//c(argv)
//c(argv.argv)
const argv = require(`yargs`).argv

if(argv.usuario === `Micodigo`){ //utilizando yargs
//if(comando === `usuario`){
    //if(process.argv[3] === `Micodigo`){  //utilizando yargs
        let x = {nombre: "alberto"}
        let y = {alias: "al"}
        let z = [
            {nombre: "albert", apellido:"gasca", edad:54},
            {nombre: "luis", apellido:"gasca", edad:55}
        ]
        //
        let resultado = _.assign(x,y)
        //no se utilizo JSON.pasre()
        //no se utilizo JSON.stringify()
        c(resultado)
        //repeticion
        _.times(3, ()=> c(`inscribe`))
        //encontrar
        resultado = _.find(z, {nombre:`albert`, apellido:"gasca"})
        c(resultado)
    }else{
        c(`Usuario no existe`) 
    }
//} //utilizando yargs

//en consola escribimos node appLodash.js usuario Micodigo
//utilizando yargs en consola escribimos node appLodash.js --usuario=Micodigo
