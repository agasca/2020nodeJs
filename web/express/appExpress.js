c = console.log
const express = require(`express`)
const app = express() //localhost:3000

c("inicia")

/*
//ejemplo 1
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//ejemplo 2  Fn=>
app.get('/', (req, res) => {
   res.send(`Hello World! ${req.method}`);
  });
*/


//
//Middleware
let isLogin = () => true //cambiar a false y comprobae en POSTMAN
//ejemplo 3.2
let logger = (req, res, next) => {
  c(`Peticion de tipo`, req.method)
  next()
}

//ejemplo 3.3
let showIP = (req, res, next) => {
  c(`IP: 127.0.0.1`)
  next()
}

//ejemplo 3.1 Middleware (hasta antes del response)
//res.send(`Bienvenido ${usuario}`);
app.use((req, res, next) => {
  if(isLogin()){
    next()
  }else{
      res.send(`no estas logueado`)
  }
}, logger, showIP) //ejemplo 3.2 & ejeplo 3.3 incluida en la funcion, revisar en el chrome y en la terminal
//   |       |    
//   |       -------Middleware x+1    
//   ---------------Middleware x       

//ejemplo 3.2
//app.use(logger)   //revisar en el chrome y en la terminal

//ejemplo 3
//metodos identificados por http GET, POST, PUT, DELETE
//se utiliza la aplicacion POSTMAN para comprobar
app.get('/', (req, res) => {
  //res.send(`hola`)
  res.send(`Metodo ${req.method}`);
});

app.post('/', (req, res) => {
  res.send(`Metodo ${req.method}`);
});

app.put('/', (req, res) => {
  res.send(`Metodo ${req.method}`);
});

app.delete('/', (req, res) => {
  res.send(`Metodo ${req.method}`);
});




/*
//
//funcion de servidor listener
app.listen(3000, function () {
  c('Example app listening on port 3000!');
});
*/
//funcion flecha
app.listen(3000, () => {
  c('Example app listening on port 3000!');
})

c("termina")