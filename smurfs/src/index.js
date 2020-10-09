import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";


import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducers from './store/reducer/reducers';

const store = createStore(reducers, applyMiddleware(thunk))


ReactDOM.render(
<Provider store ={store}>
<App />
</Provider>, document.getElementById("root"));
