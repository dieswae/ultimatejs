const user = { id: 1 }

user.name = 'Diego'
user.guardar = function () {
  console.log('Guardando', user.name);
  
}

user.guardar()

/**
 * mientras el const sea un objeto o un array le podemos agregar o eliminar propiedades
 */

//para que no se pueda editar, ni agregar. ni quitar
const user1 = Object.freeze({ id: 1 })

// para poder cambiar el valor a las propiedades
const user2 = Object.seal({ id: 1 })

