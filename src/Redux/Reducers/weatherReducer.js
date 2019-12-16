import {
    ADD_WEATHER,
    REQUEST_WEATHER
} from "../Actions/weather";

const initWeather = {
    isFetched : false,
    data:{}
}
function weatherfun(state=initWeather,action) {
    switch (action.type) {
        case REQUEST_WEATHER:
            return {...state, isFetched:"true"}
        case ADD_WEATHER:
            return {...state,data:action.weather}
        default:
            return state;
    }
    
}
export default weatherfun