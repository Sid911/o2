import { createStore,applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger} from "redux-logger"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from "./Reducers/AuthReducers"

const loggerMiddleware = createLogger()
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
/*const data = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ),
)*/

let data = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
let persistor = persistStore(data);
export {data,persistor}