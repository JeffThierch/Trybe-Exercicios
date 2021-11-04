import './App.css';
import pokemons from './data'
import Pokemon from './Pokemon';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
    <Header />
    <Pokemon pokemons = {pokemons} />
    <Footer />
    </>
  );
}

export default App;
