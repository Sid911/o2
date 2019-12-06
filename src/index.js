import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/argon-dashboard-react.min.css';
import Login from './App';
import * as serviceWorker from './serviceWorker';

import allreducer from "./Reducers/Combine";
import { createStore} from "redux";
import {Provider} from 'react-redux'

const data = createStore(allreducer);
ReactDOM.render(<Provider store = {data}><Login /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
