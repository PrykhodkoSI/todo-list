import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redusers/index'
import ReactDOM from "react-dom";
import App from "./component/App";
import "../css/index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
