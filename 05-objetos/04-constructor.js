
// { id: 1, recuperarClave: function(){} }
function User() {
  this.id = 1;
  this.recuperarClave = function () {  //metodos, funcion que fue asignada a una propiedad
    console.log('recuperando clave...');
    
  }
}

let usuario = new User();

console.log(usuario)