const login= ()=>{
    return{
        type: "SIGN_IN"
    };
}
const logout=()=>{
    return{
        type: "SIGN_OUT"
    };
}
// name

export {login,logout};