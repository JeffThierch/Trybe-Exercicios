import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cars : {
        red: false,
        blue: false,
        yellow: false,
      }
    }
  }

  changeCarPosition = ({target: {name}}) => {
    this.setState((prevState) => ({
      cars : {
        [name] : !prevState.cars[name]
      }
    }))
  }

  render() {
    const myContextValue = {...this.state, changeCarPosition: this.changeCarPosition}
    return (
      <MyContext.Provider value={myContextValue}>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
