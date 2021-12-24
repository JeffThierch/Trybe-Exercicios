import {AUTH_USER} from '../actions/index'

const INITIAL_STATE = {
  isAuthenticated: false
}

const userAuth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      }
    default:
      return state
  }
}

export default userAuth;