const os = require('os')
const fs = require('fs')


//declaraciones
let cpu = os.cpus()
let sistema = os.platform()
let usuario = os.hostname()
let comentario = "hola como estas"

let c = console.log
//c(usuario) 
//c(cpu) 
//c(sistema) 

let t = 3000
let msg = `...`
//
let time_out = setTimeout((t)=>{
    c(msg)
},t)

time_out
c("inicio")

/*
//asincrono : proceso ejecucion en aleatorio
//escritura en archivo de las variables del sistema
fs.appendFile(`output.txt`, 
    `bienvenido \n${JSON.stringify(cpu)}\n` + 
    JSON.stringify(sistema) +"\n"+
    JSON.stringify(sistema), function(error){
        if(error){
            c(`Error al crear el archivo ${error}`)
        }
    })
*/

/*
//asincrono : proceso ejecucion en aleatorio
//escritura en archivo de un comentario
fs.appendFile(`output.txt`, 
    `bienvenido \n${JSON.stringify(comentario)}\n`, 
    function(error){
        if(error){
            c(`Error al crear el archivo ${error}`)
        }
    })    
c("escribio")
    
//asincrono : proceso ejecucion en aleatorio
fs.readFile(`./output.txt`, 'utf-8', (error, data)=>{
    if(error){
        c(`Error al leer el archivo ${error}`)
    }else{
        c(data)
    }
})
*/

//asyncorono
fs.readdir(`./`,(error,files)=>{
    files.forEach(file=>{
        c(file)
    })
})
//sincrono
fs.readdirSync(`./`).forEach(file=>{
    c(file)
})

//asincrono : copiarlo
fs.createReadStream(`./output.txt`).pipe(fs.createWriteStream(`./output1.txt`))
c("copiado")

c("inicio de lectura")
//sincrono (utiliza Sync) : lectura de archivo
let fl = fs.readFileSync(`./output.txt`, 'utf-8')
c(fl)
c("leido")
//asincrono
fs.rename(`./output.txt`, `fl_renombrado.txt`, (error)=>{
    if(error) throw error
    c(`Renombrado asincrono`)
})

/*
//sincrono
fs.renameSync(`./fl_renombrado.txt`, `salida.txt`, (error)=>{
    if(error) throw error
    c(`Renombrado sincrono`)
})
*/

//borrado
fs.unlink(`./fl_renombrado.txt`, (error)=>{
    if(error) throw error
    c(`Borrado`)
})

//asincrono ver c(); procesos ejecutados en forma aleatoria
//sincrona (secuencial) utilizar fs.readFileSync(... )