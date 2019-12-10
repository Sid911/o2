import { combineReducers } from "redux";
import homeNews from "./newsReducers";
import auth from './AuthReducers'

const combined = combineReducers({auth,homeNews});
export default combined;