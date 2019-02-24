import React from 'react';

import {createStore, renderDevTools} from '../utils/devTools';
import NotesContainer from "../containers/NotesContainer";
import ListContainer from "../containers/ListContainer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="App">
                <NotesContainer/>
                <ListContainer/>
            </div>
        );
    }
}

export default App;
