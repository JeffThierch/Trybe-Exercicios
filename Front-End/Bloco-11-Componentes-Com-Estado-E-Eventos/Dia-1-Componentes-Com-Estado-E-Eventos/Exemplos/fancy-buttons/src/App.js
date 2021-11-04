import './App.css';
import Button from './Button';

function App() {
  const bottoes = ['botao 01', 'botao 02', 'botao 03'];
  const logs = ['fui clicado', 'acho que fui clicado', 'tambem fui clicado'];
  return (
    <div className="App">
      {bottoes.map((botao, index) => (
        <Button key={botao} name={botao} log={logs[index]} />
  ))}
    </div>
  );
}

export default App;
