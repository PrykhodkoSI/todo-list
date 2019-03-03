import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './js/redusers/index'
import ReactDOM from "react-dom";
import App from "./js/pages/App";
import 'react-widgets/dist/css/react-widgets.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"));
