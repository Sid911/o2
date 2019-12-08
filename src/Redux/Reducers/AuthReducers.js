import { combineReducers } from "redux";
import { AUTH_LOGIN,AUTH_LOGOUT,USER_SETDEV,SETB_USER_INFO} from "../Actions/Authentication";


const initBasic = {
    LoggedIn:false,
    IsDev:false,
    IsGuest: false,
}

const initUserInfo = {
    User: {
        FirstName:null,
        LastName:null,
        Email:null
    }
}

function Login(state = initBasic, { type, payload }){
    switch (type) {

    case AUTH_LOGIN:

        return {...state, LoggedIn :true, IsGuest:payload}

    case AUTH_LOGOUT:
        return {...state, initBasic}

    case USER_SETDEV:
        return {...state,IsDev:true}
    default:
        return state
    }
}
function Credential(state = initUserInfo, action) {
    switch (action.type) {
        case SETB_USER_INFO:
            return Object.assign({},state,{
                FirstName:action.FirstName,
                LastName:action.LastName,
                Email:action.Email
            })
        default:
            state;
    }
}

export const Auth = combineReducers({Login,Credential})