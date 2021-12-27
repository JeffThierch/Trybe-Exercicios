import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PokemonDatails from "./Pages/PokemonDatails";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route from="/pokemons/:id" render={(props) => <PokemonDatails {...props}/>} />
          <Route from="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
