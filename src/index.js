import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'; 
import { searchBooks, requestBooks } from './redux/reducers'
import './style/index.css';


const rootReducer = combineReducers({ searchBooks, requestBooks })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <BrowserRouter><Provider store={store} ><App /></Provider></BrowserRouter>
</React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
