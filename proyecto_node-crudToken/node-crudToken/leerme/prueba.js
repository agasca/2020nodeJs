const c = console.log


var regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)+$/g;

var texto =  'ana ss'.replace(/\s\s+/g, ' ')

//c(regex.test(texto))
// true

c(texto)

var prueba = texto.length > 2  
            ? regex.test(texto)
            : false

c(prueba)            
window.onload = function () {
    c("Hola soy el evento windows.onload(), soy JavaScript nativo")
}