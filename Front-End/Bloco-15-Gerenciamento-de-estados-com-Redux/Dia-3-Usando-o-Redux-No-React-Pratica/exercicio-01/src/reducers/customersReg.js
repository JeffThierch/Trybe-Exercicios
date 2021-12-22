
import {REG_CUSTOMER} from '../actions/'

const INITIAL_STATE = []


const customersReg = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REG_CUSTOMER: 
      return [...state, action.userInfos]
    default:
      return state
  }
}

export default customersReg