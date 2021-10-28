const { test } = require('picomatch');
const getSuperHero = require('./exemplo01.js');

it('Verifica se o nome do herói é Wonder Woman', async () => {
  const hero = await getSuperHero();
  expect(hero).toBe('Wonder Woman');
});

it('Verifica se o retorno da requisicao com url alterada retorna erro', async () => {
  const error = await getSuperHero()
  expect(error).toMatch('ERRADO')
})