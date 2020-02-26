const express = require(`express`)
const app = express()
const c = console.log

c("inicio")

let personas = [
    {
        id: 1,
        nombre: "al"
    },
    {
        id: 2,
        nombre: "gasca"
    },
    {
        id: 3,
        nombre: "bernal"
    }
]

app.set('view engine', 'pug')

app.get('/', (req,res) => {
    res.render('template', { titulo : 'pug', mensaje : 'agb', personas:personas })
})

app.listen(3000, ()=>{
    c("corriendo en el puerto 3000")
})