let obj = {}
let obj2 = new Object()

/**
 * new Array() []
 * new Strings() "" '' ``
 * new Number() 10
 * new Boolean() true false
 */

function Usuario () {
  this.name = "Chanchito Feliz"
}

let user = new Usuario() 
console.log(user.constructor);

const s1 = "1 + 1"
const s2 = new String("1 + 1");
console.log(s1, s2);


