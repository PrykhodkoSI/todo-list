import React from "react";
import {DropdownList} from 'react-widgets'
import "../../css/component/NotesBlock.css"

class NotesBlock extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.options = React.createRef();
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this);
        this.handleNoteSelect = this.handleNoteSelect.bind(this);
    }

    handleAddButtonClick(event) {
        event.preventDefault();
        let value = this.input.current.value;
        if (value) {
            const name = value.trim();
            if (!name) {
                return;
            }
            this.props.onAddNote(name);
        }
    }

    handleRemoveButtonClick(event) {
        event.preventDefault();
        let key = this.options.current._values.value.key;
        if (key) {
            const id = key.trim();
            if (!id) {
                return;
            }
            this.props.onRemoveNote(id);
        }
    }

    handleNoteSelect(event) {
        let key = event.key;
        if (key) {
            const id = key.trim();
            if (!id) {
                return;
            }
            this.props.onSelectNote(id);
        }
    }

    render() {
        return <div className={"NotesBlock"}>
            <div className={"NotesBlock__NotesAddArea"}>
                <input
                    className={"NotesBlock__NoteList"}
                    ref={this.input}
                    type="text"/>
                <button className={"NotesBlock__AddButton"} type="button" onClick={this.handleAddButtonClick}>Add Note
                </button>
            </div>
            {
                this.props.notesList.size > 0 &&
                <div className={"NotesBlock__NotesChangeArea"}>
                    <DropdownList
                        className={"NotesBlock__NotesList"}
                        data={Array.from(this.props.notesList, ([id, name]) => {
                            return {key: id, value: name}
                        })}
                        textField={"value"}
                        dataField={"key"}
                        filter={false}
                        onSelect={this.handleNoteSelect}
                        ref={this.options}
                    />
                    <button className={"NotesBlock__DeleteButton"} type="button"
                            onClick={this.handleRemoveButtonClick}>Remove Note
                    </button>
                </div>
                }
        </div>;
    }


}

export default NotesBlock;