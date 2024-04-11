let user = {
  id: 1,
  name: 'diegog',
  age: 22
};

for (let prop in user) {
  console.log(prop, user[prop]);
}

// iterar array con for in aunque es mejor iterarlo con 'for of'

let animales = ['chanchito', 'dragon', 'vaca'];

for (let indice in animales) {
  console.log(indice, animales[indice]);
}