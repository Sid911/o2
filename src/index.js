import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/argon-dashboard-react.min.css';
import Wrapper from './Wrapper';
import * as serviceWorker from './serviceWorker';

import allreducer from "./Reducers/Combine";
import { createStore} from "redux";
import {Provider} from 'react-redux'

const data = createStore(allreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(<Provider store = {data}><Wrapper /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
