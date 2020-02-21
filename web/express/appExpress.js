c = console.log

//localhost:3000

const express = require(`express`)
const app = express()

//ejemplo 3 middleware
let isLogin = () => true
let logger = (req, res, next) => {
    c(`Peticion de tipo`, req.method)
    next()
}
let showIP = (req, res, next) => {
    c(`IP: 127.0.0.1`)
    next()
}
app.use((req, res, next) => {
    if(isLogin()){
        next()
    }else{
        res.send(`no estas logueados`)
    }
}, logger, showIP)

//app.use(logger)

/*
//ejemplo 1
app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
*/

//ejemplo 2
//app.get('/', (req, res) => {
//    res.send(`Hello World! ${req.method}`);
 // });
app.get('/:user', (req, res) => {
    let usuario = req.params.user
    res.send(`Bienvenido ${usuario}`);
  });
  
app.post('/', (req, res) => {
    res.send(`Hello World! ${req.method}`);
  });

app.put('/', (req, res) => {
    res.send(`Hello World! ${req.method}`);
  });

app.delete('/', (req, res) => {
    res.send(`Hello World! ${req.method}`);
  });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
