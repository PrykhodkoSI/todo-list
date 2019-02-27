import {connect} from "react-redux";
import ListBlock from "../component/ListBlock"
import Actions from "../actions/TodoActions";

const mapStateToProps = (state) => {
    const selectedNote = state.TodoList.selectedNote;
    const todoList = state.TodoList.todoList;
    let list = new Map([...todoList].filter(([k, v]) => v.noteId === selectedNote));
    return {
        todoList: list,
        selectedNote: state.TodoList.selectedNote,
        filter: state.TodoList.filter
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: (text) => {
            dispatch(Actions.addTodo(text));
        },
        onSetVisibilityFilter: (filter) => {
            dispatch(Actions.setVisibilityFilter(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBlock);