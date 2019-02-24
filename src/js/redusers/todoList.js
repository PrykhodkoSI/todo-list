import Actions from "../constants/Actions";

const defaultState = {
    todoList: new Map()
};

const todoListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Actions.ADD_TODO: {
            let todoList = state.todoList;
            todoList.set(action.payload.id, {

                text: action.payload.name
            });
            return {
                ...state,
                todoList: todoList
            };
        }
        case Actions.REMOVE_TODO: {
            let todoList = state.todoList;
            todoList.delete(action.payload);//remove(action.payload);
            return {
                ...state,
                todoList: todoList
            }
        }
        case Actions.TOGGLE_TODO: {
            let todoList = state.todoList;
            todoList.delete(action.payload);//remove(action.payload);
            return {
                ...state,
                todoList: todoList
            }
        }
        default:
            return state
    }
};

export default todoListReducer