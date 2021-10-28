import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <main className="mainContent">
        {conteudos.map(({conteudo, bloco, status}) => (
          <div key={conteudo} className="card-content">
            <h3 className="">O conteúdo é: {conteudo}</h3>
            <p className ="my-6">Status: {status}</p>
            <p>Bloco: {bloco}</p>
          </div>
        ))}
      </main>
    )
  }
}

export default Content;