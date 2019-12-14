import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/argon-dashboard-react.min.css';
import * as serviceWorker from './serviceWorker';


import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {data,persistor,rrfProps} from "./Redux/configStore";

import App from "./App";

ReactDOM.render(
<Provider store={data}>
    <PersistGate loading={null} persistor={persistor} style={{margin:0}}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </PersistGate>
</Provider>,
document.getElementById('root'));
serviceWorker.register();
