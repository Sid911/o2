import { ADD_NEWS, REQUEST_NEWS } from "../Actions/news";
import { initAgriNews } from "./newsReducers";

export default function agricultureNews(state = initAgriNews, action) {
    if (action.page==="agriculture") {
        switch (action.type) {
            case REQUEST_NEWS:
                return { ...state, isFetching: true };
            case ADD_NEWS:
                return { ...state, isFetched: true, items: action.news, lastUpdated: action.receivedAt };
            default:
                return state;
        }
    }else{
        return state
    }

}
