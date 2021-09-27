const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const returnKeyValue = (objeto) => {

  const keys = Object.keys(objeto);

  for (const value in keys) {
    console.log(`${keys[value]}, Nivel: ${objeto[keys[value]]}`)
  }
}


returnKeyValue(student1)