let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../models/persona');

router.post('/persona/operar', (req, res, next) => {
  //console.log(req.body);  

  if (req.body._id === "") {
    let per = new Persona({
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      token: token(nomApe(req.body.nombres), nomApe(req.body.apellidos))
    });
    
    per.save();
  } else {    
    //console.log(req.body._id);
    Persona.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

let nomApe = (cadena) => {
  this.data = cadena
  this.min = 0
  this.max =  this.data.length
  this.posData =  Math.random() * (this.max - this.min) + this.min 

  return this.data.substr(this.posData,2)
}

let token = (n, a) => {
  this.nombre = n
  this.apellido = a
  this.fechaToken = new Date(Date.now())   
  this.r = Math.random().toString(36).substring(7) //36 es la base, 2 es binario, 16 es hexa
  this.resultado = ""
  this.resultado= (this.nombre + 
                  this.apellido + "@" +
                  this.fechaToken.toString().slice(16,24) + 
                  this.r)

  return this.resultado
}

module.exports = router;
