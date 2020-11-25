import React from 'react';
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import NewsReducer from './store/reducers/NewsReducer'
import ReactDOM from 'react-dom';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducer=combineReducers({
    data:NewsReducer,
   
})
const store=createStore(
    RootReducer,composeEnhancers(applyMiddleware(thunk))
)
const app=(
    <Provider store={store}>
    <BrowserRouter forceRefresh>
    <App/>
    </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
