import {
    ADD_WEATHER,
    REQUEST_WEATHER
} from "../Actions/weather";

const initWeather = {
    isFetching : false,
    data:null
}
function we(state=initWeather,action) {
    switch (action.type) {
        case REQUEST_WEATHER:
            return {...state, isFetching:"true"}
        case ADD_WEATHER:
            return {...state,data:action.weather}
        default:
            break;
    }
    
}
export {we}