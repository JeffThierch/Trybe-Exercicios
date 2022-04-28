type Slices = 4 | 6 | 8

interface IPizza {
  flavor: string;
  slices: Slices;
}



const Calabresa: IPizza = {
  flavor: 'Calabresa',
  slices: 8
}

console.log(Calabresa)

const Marguerita: IPizza = {
  flavor: 'Marguerita',
  slices: 6
}

console.log(Marguerita)

const Nutela: IPizza = {
  flavor: 'Nutela',
  slices: 4
}

console.log(Nutela)