import Actions from "../constants/Actions";
import VisibilityFilters from "../constants/VisibilityFilters";

const defaultState = {
    todoList: new Map(),
    notesList: new Map(),
    selectedNote: null,
    filter: VisibilityFilters.SHOW_ALL
};

const todoListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Actions.ADD_NOTE: {
            let notesList = new Map(state.notesList);
            notesList.set(action.payload.id, action.payload.name);
            return {
                ...state,
                notesList: notesList
            };
        }
        case Actions.REMOVE_NOTE: {
            let removingNote = action.payload;
            let notesList = new Map(state.notesList);
            notesList.delete(removingNote);
            let todoList = new Map([...state.todoList].filter(([k, v]) => v.noteId != removingNote));
            return {
                ...state,
                todoList: todoList,
                notesList: notesList,
                selectedNote: state.selectedNote == removingNote ? null : removingNote
            }
        }
        case Actions.SELECT_NOTE: {
            let id = action.payload;
            return {
                ...state,
                selectedNote: id
            }
        }
    }
    if (state.selectedNote != null && state.selectedNote !== undefined) {
        switch (action.type) {
            case Actions.ADD_TODO: {
                let todoList = new Map(state.todoList);
                todoList.set(action.payload.id, {
                    noteId: state.selectedNote,
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
                let todo = todoList.get(action.payload);
                if (todo) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return {
                    ...state,
                    todoList: todoList
                }
            }
            case Actions.SET_VISIBILITY_FILTER: {
                let filter = action.payload;
                return {
                    ...state,
                    filter: filter
                }
            }
        }
    }
    return state
};

export default todoListReducer