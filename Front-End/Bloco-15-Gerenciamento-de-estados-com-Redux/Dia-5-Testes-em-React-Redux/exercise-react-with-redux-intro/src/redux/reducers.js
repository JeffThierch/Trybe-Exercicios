import {CHANGE_SIGNAL, MOVE_CAR} from './actionCreators'

const INITIAL_SIGNAL_STATE = {
  color: 'red'
}

const INITIAL_CAR_STATE = {
  cars: {
    red: false,
    blue: false,
    yellow: false
  }
}

export const changeSignalColor = (state = INITIAL_SIGNAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SIGNAL : 
      return {
        ...state,
        color: action.payload
      }
      default: 
        return state;
    }
}

export const moveCar = (state = INITIAL_CAR_STATE, action) => {
  switch (action.type) {
    case MOVE_CAR: 
      return {
        ...state,
        cars:{
          ...state.cars,
          [action.car]: !state.cars[action.car]
        }
      }
      default: 
        return state;
  }
}