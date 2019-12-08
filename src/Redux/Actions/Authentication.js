
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const USER_SETDEV = "USER_SETDEV";
export const SETB_USER_INFO = "SETB_USER_INFO";

function login (payload){
    return{    
    type: AUTH_LOGIN,
    payload}
}

function logout (payload){
    return{
    type: AUTH_LOGOUT,
    payload}
}


function set_dev(payload){
    return{
    type: USER_SETDEV,
    payload
    }
}

function setBUserInfo(FirstName,LastName,Email){
    return{
        type: SETB_USER_INFO,
        FirstName: FirstName,
        LastName: LastName,
        Email:Email
    }
}
