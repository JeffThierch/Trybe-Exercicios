type Slices = 4 | 6 | 8
type SugarSlices = 4

type Common = 'Calabresa' | 'Frango' | 'Pepperoni'
type Vegetarian = 'Marguerita' | 'Palmito' | 'Cogumelo'
type Sugar = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow'

interface IPizza {
  flavor: string;
  slices: Slices;
}

interface ICommonPizza extends IPizza {
  flavor: Common;
  slices: Slices;
}

interface IVegetarian extends IPizza {
  flavor: Vegetarian;
  slices: Slices;
}

interface ISugar extends IPizza {
  flavor: Sugar;
  slices: SugarSlices;
}


/* Exercicio 03
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
*/

const calabresa: ICommonPizza = {
  flavor: "Calabresa",
  slices: 6
};

console.log(calabresa);

const frango: ICommonPizza = {
  flavor: "Frango",
  slices: 8
};

console.log(frango);

const pepperoni: ICommonPizza = {
  flavor: "Pepperoni",
  slices: 4
};

console.log(pepperoni);

const marguerita: IVegetarian = {
   flavor: "Marguerita",
   slices: 8
};

console.log(marguerita);

const palmito: IVegetarian = {
  flavor: "Palmito",
  slices: 8
};

console.log(palmito);

const nutella: ISugar = {
  flavor: "Nutela",
  slices: 4
};

console.log(nutella);