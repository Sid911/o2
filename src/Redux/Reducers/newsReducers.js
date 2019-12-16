import { ADD_NEWS,REQUEST_NEWS} from "../Actions/news";
import {combineReducers} from 'redux';
import { agricultureNews } from "./agricultureNews";
const initHomeNews = {
    isFetching : false,
    lastUpdated : 0,
    error:false,
    items:[]
}
export const initAgriNews = {
    isFetching : false,
    lastUpdated : 0,
    error:false,
    items:[]
}
const initWaterNews = {
    isFetching : false,
    lastUpdated : 0,
    items:[]
}

function homeNews(state = initHomeNews,action){
    if (action.page==="home") {
        switch (action.type) {
            case REQUEST_NEWS :
                return {...state,isFetching: true}
            case ADD_NEWS:
                return {...state, isFetching:false, items:action.news, lastUpdated:action.receivedAt}
            default:
                return state;
        }
    }else{
        return state
    }

}
export default homeNews
