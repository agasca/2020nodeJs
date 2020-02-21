//npm i node-fetch --save
c = console.log
const fetch = require(`node-fetch`)

/*
//ejemplo 1
fetch(`https://api.github.com/users/agasca`).then((res)=>{
    //c(res)
    //retornarla a JSON
    return res.json()
}).then((json)=>{
    c(json)
})
*/

//ejemplo 2
let promesa = fetch(`https://api.github.com/users/agasca`)
promesa.then((res)=>{
    //c(res)
    //retornarla a JSON
    return res.json()
}).then((json)=>{
    c(json)
})