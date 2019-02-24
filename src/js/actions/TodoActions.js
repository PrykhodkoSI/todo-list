import Actions from "../constants/Actions"

let nextTodoId = 0;
let nextNoteId = 0;
const TodoListActions = {

    addTodo(text) {
        return {
            type: Actions.ADD_TODO,
            payload: {id: nextTodoId++, text: text}
        }
    },

    removeTodo(id) {
        return {
            type: Actions.REMOVE_TODO,
            payload: id
        }
    },

    addNote(name) {
        return {
            type: Actions.ADD_NOTE,
            payload: {id: nextNoteId++, name: name}
        }
    },

    removeNote(id) {
        return {
            type: Actions.REMOVE_NOTE,
            payload: id
        }
    },

    setVisibilityFilter(filter) {
        return {
            type: Actions.SET_VISIBILITY_FILTER,
            payload: filter
        }
    },

    toggleTodo(id) {
        return {
            type: Actions.TOGGLE_TODO,
            payload: id
        }
    }
};

export default TodoListActions;