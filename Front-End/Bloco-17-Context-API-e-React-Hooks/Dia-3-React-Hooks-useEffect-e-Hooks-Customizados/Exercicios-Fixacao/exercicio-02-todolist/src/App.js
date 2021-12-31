import React from 'react'
import useArray from './hooks/useArray';

function App() {

  const [todos, addTodosInList, removeTodo, changeValue, value] = useArray()

  const takeInputValue = ({target:{value}}) => {
    changeValue(value)
  }

  return (
    <div className="App">
    <input type="text" placeholder='Add Todo' value={value} onChange={takeInputValue} />
    <button onClick={() => addTodosInList(value)}>Adiconar Todo</button>
    <ul>
      {todos.map((todo, index) => <li key={index + 1} onClick={() => removeTodo(todo)}>{todo}</li>)}
    </ul>
    </div>
  );
}

export default App;
