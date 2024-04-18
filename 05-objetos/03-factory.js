function createUser(name, email) {
  return {
    email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log('Recuperando clave...');
    }
  }
}

let user1 = createUser('Diego', 'deigoramire.io')
let user2 = createUser('Debian', 'debianX.io')

console.log(user1, user2);

