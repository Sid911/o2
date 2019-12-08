import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/argon-dashboard-react.min.css';
import * as serviceWorker from './serviceWorker';

import App from "./App";

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
