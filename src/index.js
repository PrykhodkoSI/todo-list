import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './js/redusers/index'
import ReactDOM from "react-dom";
import App from "./js/pages/App";
//import "./css/index.css";
//import "github-fork-ribbon-css/gh-fork-ribbon.css";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"));

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )
