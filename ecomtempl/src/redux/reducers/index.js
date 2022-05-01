import {userReducer} from "./userReducer"
import {productReducer} from "./userProduct"
import {combineReducers} from "redux"
import { userRequest } from "./userRequest"


export const rootReducer=combineReducers({user :userReducer, product: productReducer , request: userRequest})