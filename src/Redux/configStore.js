import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger} from "redux-logger"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import {init,firebase} from "./configFirebase"
import { createFirestoreInstance} from "redux-firestore"

import rootReducer from "./Reducers/indexReducer"
const persistConfig = {
  key: 'O2',
  storage,
}


const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  enableClaims: true // Get custom claims along with the profile
}
init()


const loggerMiddleware = createLogger()
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let data = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))
let persistor = persistStore(data);

var rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: data.dispatch,
  createFirestoreInstance // <- needed if using firestore
}
export {data,persistor,rrfProps}