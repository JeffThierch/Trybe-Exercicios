import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arr = ['tomar banho', 'comer pao', 'jogar mortal']

function App() {
  return (
    <ul>{arr.map((item) => Task(item))}</ul>
  );
}

export default App;
