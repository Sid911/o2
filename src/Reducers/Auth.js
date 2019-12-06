const Authstate= {
    logged_in : false,
    name: null,
}

const islogged = (state=null,action) =>{
    switch (action.type) {
        case "SIGN_IN":
            Authstate.logged_in= true;
            state = true;
            return Authstate.logged_in;
        
        case "SIGN_OUT":
            Authstate.logged_in = false;
            return Authstate.logged_in;
        default:
            return false;
    }
}
const info = (state =null, action, arg) =>{
    switch (action.type) {
        case "WRITE_NAME": 
            if (typeof arg === "undefined") {
                return 1;
            }else{
                return Authstate.name = arg;   
            } 
        case "GET_NAME":
            return Authstate.name;
        default:
            return 1;
    }
}
export {islogged,info};