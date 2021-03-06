import React, { useState, useEffect } from 'react';

function Greeting({ initialName = '' }) {
  // 🐨 inicialize o estado com o valor que vem do localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = useState(initialName);

  // 🐨 Utilize o hook useEffect para atualizar a
  // propriedade `name` no localStorage quando o estado for alterado
  // 💰 window.localStorage.setItem('name', name)

  useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  let storageName;
  if(!window.localStorage.getItem('name')) {
    window.localStorage.setItem('name', '')
    storageName = window.localStorage.getItem('name')
  } else {
    storageName = window.localStorage.getItem('name')
  }
  return <Greeting initialName={storageName}/>;
}

export default App;
