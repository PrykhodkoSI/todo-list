import {connect} from "react-redux";
import Actions from "../actions/TodoActions";
import NotesBlock from "../component/NotesBlock"

const mapStateToProps = (state) => {
    return {
        notesList: state.TodoList.notesList
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onAddNote: (name) => {
            dispatch(Actions.addNote(name));
        },
        onRemoveNote: (id) => {
            dispatch(Actions.removeNote(id));
        },
        onSelectNote: (id) => {
            dispatch(Actions.selectNote(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesBlock);