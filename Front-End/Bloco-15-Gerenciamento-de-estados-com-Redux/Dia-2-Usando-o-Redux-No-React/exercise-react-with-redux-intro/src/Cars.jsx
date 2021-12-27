import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import {moveCar} from './redux/actionCreators.js'
import {connect} from 'react-redux'

export function Cars({
  redCar, blueCar, yellowCar, moveCar
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button type="button"
        value='red'
        onClick={({target}) => {moveCar(target.value, redCar ? 'left' : 'right')}}>Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button 
          type="button"
          value='blue'
          onClick={({target}) => {moveCar(target.value, blueCar ? 'left' : 'right')}}>Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button 
          type="button"
          value='yellow'
          onClick={({target}) => {moveCar(target.value, yellowCar ? 'left' : 'right' )}}>Move</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redCar: state.moveCar.cars.red,
  blueCar: state.moveCar.cars.blue,
  yellowCar: state.moveCar.cars.yellow,
})

const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)
