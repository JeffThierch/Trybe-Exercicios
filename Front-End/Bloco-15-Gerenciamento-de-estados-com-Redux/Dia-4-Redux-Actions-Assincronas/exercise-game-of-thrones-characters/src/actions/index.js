import charAPI from '../services/charAPI'
export const REQUEST_API = 'REQUEST_API'
export const RETURN_API = 'RETURN_API'
export const ERROR_API = 'ERROR_API'


const requestToApi = () => ({
  type: REQUEST_API
})

const returnedData = (data) => ({
  type: RETURN_API,
  infos: data
})

const returnedError = (error) => ({
  type: ERROR_API,
  payload: error
})

export const fetchCharacter = (charName) => {
  return async (dispatch) => {
    dispatch(requestToApi())
    try {
      const data = await charAPI(charName)
      dispatch(returnedData(data))
    }
    catch(err) {
      dispatch(returnedError(err))
    }
  }
}
