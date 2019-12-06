import {islogged,info} from "./Auth";

import { combineReducers } from "redux";

const reduced = combineReducers({
    islogged,
    info
})

export default reduced;