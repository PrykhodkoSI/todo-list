import React from 'react';

import NotesList from "../containers/NotesContainer";
import TodoList from "../containers/ListContainer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <NotesList/>
                <TodoList/>
            </div>
        );
    }
}

export default App;
