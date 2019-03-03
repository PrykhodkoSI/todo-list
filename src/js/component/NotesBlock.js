import React from "react";
import {DropdownList} from 'react-widgets'
import "../../css/component/NotesBlock.css"

class NotesBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textBox: ""
        };
        this.options = React.createRef();
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this);
        this.handleNoteSelect = this.handleNoteSelect.bind(this);
    }

    handleAddButtonClick(event) {
        event.preventDefault();
        let value = this.state.textBox;
        if (value) {
            const name = value.trim();
            if (!name) {
                return;
            }
            this.props.onAddNote(name);
            this.state.textBox = "";
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
        return <table className={"NotesBlock"}>
            <tbody>
            <tr>
                <td>
                    <h1 className={"NotesBlock__NotesLabel"}>Notes:</h1>
                </td>
                <td>
                    <input
                        className={"NotesBlock__NoteList"}
                        value={this.state.textBox}
                        onChange={(e) => this.setState({textBox: e.target.value})}
                        placeholder={"Type note name"}
                        type="text"/>
                </td>
                <td>
                    <button className={"NotesBlock__AddButton"} type="button"
                            onClick={this.handleAddButtonClick}>Add Note
                    </button>
                </td>
            </tr>
            {
                this.props.notesList.size > 0 &&
                <tr className={"NotesBlock__NotesChangeArea"}>
                    <td colSpan="2">
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
                            placeholder={"Select Note"}
                        />
                    </td>
                    <td>
                        <button className={"NotesBlock__DeleteButton"} type="button"
                                onClick={this.handleRemoveButtonClick}>Remove Note
                        </button>
                    </td>
                </tr>
            }
            </tbody>
        </table>;
    }


}

export default NotesBlock;