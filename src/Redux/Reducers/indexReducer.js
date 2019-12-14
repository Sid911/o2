import { combineReducers } from "redux";
import {homeNews,agricultureNews} from "./newsReducers";
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import {firestoreReducer } from 'redux-firestore'

const combined = combineReducers({firebase: firebaseReducer,firestore: firestoreReducer,homeNews,agricultureNews});
export default combined;