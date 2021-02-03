import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import 'jquery/dist/jquery'
import 'popper.js/dist/popper'
import 'bootstrap/dist/js/bootstrap'
import ReactDOM from 'react-dom';
import App from './App'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

const createStoreWithMW = applyMiddleware()(createStore)
ReactDOM.render(<Provider store={createStoreWithMW(reducers)}><App/></Provider>,document.getElementById('root'));
