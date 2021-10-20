// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

describe('Testa a funcao getRepos', () => {
  it('Verifica o retorno da funcao', async () => {
    expect.assertions(2);
    const data = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(data).toContain('sd-01-week4-5-project-todo-list')
    expect(data).toContain('sd-01-week4-5-project-meme-generator')
  })
})