import { combineReducers } from "redux";
import {homeNews,agricultureNews} from "./newsReducers";
import auth from './AuthReducers'

const combined = combineReducers({auth,homeNews,agricultureNews});
export default combined;