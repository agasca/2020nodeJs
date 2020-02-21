const c = console.log
const os = require(`os`)
const fs = require(`fs`)

let cpu = os.cpus()
let sistema = os.platform()
c(cpu)
c(sistema)
let cpu_string = JSON.stringify(cpu)

//fs.appendFile(`miTexto.txt`,`contenido del archivo ` + cpu, function(error){ //imprime JSON
fs.appendFile(`miTexto.txt`,`contenido del archivo ${cpu_string}`, function(error){ //traduce JSON
    if(error){
        c(error)
    }
})

