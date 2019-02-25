import React from "react";

class NotesBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notesList: []
        };
        //console.log(this.props);
        this.input = React.createRef();
        this.option = React.createRef();
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this);
        this.handleNoteChange = this.handleNoteChange.bind(this);
    }

    handleAddButtonClick(event) {
        event.preventDefault();
        if (this.input.current) {
            const name = this.input.current.value.trim();
            if (!name) {
                return;
            }
            this.props.onAddNote(name);
        }
    }

    handleRemoveButtonClick(event) {
        event.preventDefault();
        if (this.input.current) {
            const id = this.input.current.value.trim();
            if (!id) {
                return;
            }
            this.props.onRemoveNote(id);
        }
    }

    handleNoteChange(event) {
        console.log("nodeChange");
        console.log(event);
        const id = event.target.value.trim();
        if (!id) {
            return;
        }
        this.props.onSelectNote(id);
    }

    render() {
        console.log("render()");
        console.log(this.props);
        return <div className={"NotesBlock"}>
            <input
                className={"NotesBlock__NoteList"}
                ref={this.input}
                type="text"
                list="notesList"/>
            <datalist
                ref={this.option}
                onChange={this.handleNoteChange}
                id="notesList">
                {Array.from(this.props.notesList).map(([id, name]) => {
                    return <option key={id} value={id}>{name}</option>
                })}
            </datalist>
            <button className={"NotesBlock__AddButton"} type="button" onClick={this.handleAddButtonClick}>Add Note
            </button>
            <button className={"NotesBlock__DeleteButton"} type="button" onClick={this.handleRemoveButtonClick}>Remove
                Note
            </button>
        </div>;
    }


}

export default NotesBlock;