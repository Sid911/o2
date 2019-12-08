const Authstate= {
    logged_in : false,
    name: "",
}

const islogged = (state=Authstate,action) =>{
    console.log(state)
    switch (action.type) {
        case "SIGN_IN":
            return {
                logged_in: true,
                name : state.name
            }
        case "SIGN_OUT":
            return {
                logged_in: false,
                name : state.name
            }
        default:
            return false;
    }
}
const info = (state=Authstate, action) =>{
    switch (action.type) {
        case "WRITE_NAME": 
                return Object.assign({state})  
        case "GET_NAME":
            return state.name;
        default:
            return 1;
    }
}
export {islogged,info};