import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import {changeSignal} from './redux/actionCreators.js'
import {connect} from 'react-redux'

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

export function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button 
        data-testid='change-signal-color-btn' 
        onClick={() => changeSignal('red')} 
        type="button">Red</button>
        <button 
        data-testid='change-signal-color-btn' 
        onClick={() => changeSignal('yellow')} 
        type="button">Yellow</button>
        <button 
        data-testid='change-signal-color-btn' 
        onClick={() => changeSignal('green')} 
        type="button">Green</button>
      </div>
      <img 
      data-testid='signal-image'
      className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.changeSignalColor.color
})

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (color) => dispatch(changeSignal(color))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal)
