// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Manga', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Maca', 'Mamao'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));