import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger} from "redux-logger"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from "./Reducers/indexReducer"
const persistConfig = {
  key: 'O2',
  storage,
}
const loggerMiddleware = createLogger()
const persistedReducer = persistReducer(persistConfig, rootReducer)
/*const data = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ),
)*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let data = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))
let persistor = persistStore(data);
export {data,persistor}