import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false
      },
      signal: {
        color: 'red'
      }
    }
  }

  changeCarPosition = ({target: {name}}) => (
    this.setState((prevState) => ({
      cars: {
        [name]: !prevState.cars[name]
      }
    }))
  )

  changeSignalColor = (signalColor) => (
    this.setState({
      signal: {color: signalColor}
    })
  )

  render() {
    const MY_CONTEXT_VALUE = {
      ...this.state,
      changeCarPosition: this.changeCarPosition,
      changeSignalColor: this.changeSignalColor
    }
    return (
      <MyContext.Provider value={MY_CONTEXT_VALUE} >
      <div className="container">
        <Cars />
        <TrafficSignal />
      </div>
      </MyContext.Provider>
    );
  }
}

export default App;
