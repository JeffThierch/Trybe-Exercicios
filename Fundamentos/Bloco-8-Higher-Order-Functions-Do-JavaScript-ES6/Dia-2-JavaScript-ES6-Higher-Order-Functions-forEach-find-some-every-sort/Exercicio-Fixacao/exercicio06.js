const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  let idades = []
  arr.forEach((value, index) => {
     idades.push(arr[index].age)
  })
  if (idades.every((age) => age >= minimumAge)) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyAges(people, 17));