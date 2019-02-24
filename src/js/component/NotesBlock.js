import React from "react";
import Actions from "../actions/TodoActions"

class NotesBlock extends React.Component {
    input;
    constructor(){
        super();
        this.handleAddButtonClick = this.handleAddButtonClick().bind();
        this.handleRemoveButtonClick = this.handleRemoveButtonClick().bind();
    }

    handleAddButtonClick(event){
        event.preventDefault();
        if (!this.input.value.trim()) {
            return
        }
        dispatch(Actions.addNote(this.input.value));
    }

    handleRemoveButtonClick(event){
        event.preventDefault();
        if (!this.input.value.trim()) {
            return
        }
        dispatch(Actions.removeNote(this.input.value));
    }

    getInputRef = (node) => {this.input = node;};

    render() {
        return <div className={"NotesBlock"}>
            <input
                className={"NotesBlock__NoteList"}
                ref={this.getInputRef}
                type="text"
                list="notesList">
                <datalist id="notesList">
                    {this.props.notesList.map(note => {return <option value={note.id}>{note.name}</option>})}
                </datalist>
            </input>
            <button className={"NotesBlock__AddButton"} type="button" onClick={this.handleAddButtonClick}>Add Note</button>
            <button className={"NotesBlock__DeleteButton"} type="button" onClick={this.handleRemoveButtonClick}>Remove Note</button>
        </div>;
    }
}

export default NotesBlock;