import { combineReducers } from "redux"
import customersReg from "./customersReg"
import userAuth from "./userAuth"

const rootReducer = combineReducers({customersReg, userAuth})

export default rootReducer