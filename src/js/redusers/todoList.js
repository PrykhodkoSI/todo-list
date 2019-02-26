import Actions from "../constants/Actions";
import VisibilityFilters from "../constants/VisibilityFilters";

const defaultState = {
    todoList: new Map(),
    filter: VisibilityFilters.SHOW_ALL,
};

const todoListReducer = (state = defaultState, action) => {
    console.log("list Reducer");
    console.log(state);
    console.log(action);
    console.log("selectedNote");
    console.log(state.NotesList.selectedNote);
    if (state.NotesList.selectedNote != null && state.NotesList.selectedNote !== undefined) {
        switch (action.type) {
            case Actions.ADD_TODO: {
                let todoList = new Map(state.todoList);
                todoList.set(action.payload.id, {
                    noteId: state.NotesList.selectedNote,
                    text: action.payload.text,
                    isCompleted: false
                });
                return {
                    ...state,
                    todoList: todoList
                };
            }
            case Actions.REMOVE_TODO: {
                let todoList = new Map(state.todoList);
                todoList.delete(action.payload);
                return {
                    ...state,
                    todoList: todoList
                }
            }
            case Actions.TOGGLE_TODO: {
                let todoList = new Map(state.todoList);
                console.log(todoList);
                let todo = todoList.get(action.payload);
                console.log(todo);
                if (todo) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return {
                    ...state,
                    todoList: todoList
                }
            }
            case Actions.SET_VISIBILITY_FILTER: {
                let filter = action.payload.filter;
                return {
                    ...state,
                    filter: filter
                }
            }
            default:
                return state
        }
    }
    return state
};

export default todoListReducer