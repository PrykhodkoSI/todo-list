import {connect} from "react-redux";
import Todo from "../component/Todo"
import Actions from "../actions/TodoActions";

function mapDispatchToProps(dispatch) {
    return {
        onRemoveTodo: (id) => {
            dispatch(Actions.removeTodo(id));
        },
        onToggleTodo: (id) => {
            dispatch(Actions.toggleTodo(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(Todo);