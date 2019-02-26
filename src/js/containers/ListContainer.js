import {connect} from "react-redux";
import ListBlock from "../component/ListBlock"
import Actions from "../actions/TodoActions";

const mapStateToProps = (state) => {
    return {
        todoList: state.TodoList.todoList,
        filter: state.TodoList.filter
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: (text) => {
            dispatch(Actions.addTodo(text));
        },
        onRemoveTodo: (id) => {
            dispatch(Actions.removeTodo(id));
        },
        onToggleTodo: (id) => {
            dispatch(Actions.toggleTodo(id));
        },
        onSetVisibilityFilter: (filter) => {
            dispatch(Actions.setVisibilityFilter(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBlock);