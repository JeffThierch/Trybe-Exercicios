import {REQUEST_API, RETURN_API, ERROR_API} from '../actions'

const INITIAL_STATE = {
  character: [],
  isLoading: false,
  error: ''}

const ApiCharInfos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {...state, isLoading: true}
    case RETURN_API:
      return {
        ...state,
        character: action.infos,
        isLoading: false
      }
    case ERROR_API :
      return {...state, error: action.payload}
    default:
      return state
  }
}

export default ApiCharInfos
