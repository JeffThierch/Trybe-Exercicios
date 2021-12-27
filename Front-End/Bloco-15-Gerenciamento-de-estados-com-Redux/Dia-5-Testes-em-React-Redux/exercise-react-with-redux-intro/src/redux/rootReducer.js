import {combineReducers} from 'redux';
import {changeSignalColor, moveCar} from './reducers'

const rootReducer = combineReducers({changeSignalColor, moveCar});

export default rootReducer