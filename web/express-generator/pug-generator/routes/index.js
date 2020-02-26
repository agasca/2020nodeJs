var express = require('express');
var router = express.Router();

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

router.get('/', (req,res) => {
  res.render('index', { titulo: 'pug', mensaje: 'agb', personas: personas })
})

module.exports = router
