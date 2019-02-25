import {connect} from "react-redux";
import ListBlock from "../component/ListBlock"
import Actions from "../actions/TodoActions";

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBlock);