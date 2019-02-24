import React from "react";
import VisibilityFilters from "../constants/VisibilityFilters"


class ListBlock extends React.Component {

    constructor(){
        super();

    }

    render(){
        return <div className={"ListBlock"}>
            <ul>
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                    />
                )}
            </ul>
        </div>
    }

    mapStateToProps(state){
        return {
            todos: this._getVisibleTodos(state.todos, state.visibilityFilter)
        }
    }

    _getVisibleTodos (todos, filter) {
        switch (filter) {
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter(t => t.completed)
            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter(t => !t.completed)
            case VisibilityFilters.SHOW_ALL:
            default:
                return todos
        }
    }
}

export default ListBlock;