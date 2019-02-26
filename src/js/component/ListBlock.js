import React from "react";
import VisibilityFilters from "../constants/VisibilityFilters"
import Todo from "./Todo";


class ListBlock extends React.Component {

    constructor(props){
        super(props);
        this.textBox = React.createRef();
        this.handleTodoClick =this.handleTodoClick.bind(this);
        this.handleAddTodoClick =this.handleAddTodoClick.bind(this);
        this.handleRemoveTodoClick =this.handleRemoveTodoClick.bind(this);
    }

    handleTodoClick(event){
        console.log("handleTodoClick " + event.target.id);//TODO get id
        this.props.onToggleTodo(event.target.id);
    }

    handleRemoveTodoClick(event){
        console.log("handleRemoveTodoClick " + event.target.id);//TODO get id
        this.props.onRemoveTodo(event.target.id);
    }

    handleAddTodoClick(event) {
        console.log("handleAddTodoClick");
        event.preventDefault();
        if (this.textBox.current) {
            const text = this.textBox.current.value.trim();
            if (!text) {
                return;
            }
            this.props.onAddTodo(text);
        }
    }

    render() {
        let todoList = this._getVisibleTodos();
        return <div className={"ListBlock"}>
                <ul>
                {Array.from(todoList).map(([id, value]) =>
                    <div key={id}>
                        <Todo
                              id={id}
                              {...value}
                              onClick={this.handleTodoClick}/>
                        <button onClick={this.handleRemoveTodoClick}>Remove Todo</button>
                    </div>
                )}
                </ul>
                <input type={"text"} ref={this.textBox}/>
                <button onClick={this.handleAddTodoClick}>Add Todo</button>
        </div>
    }


    _getVisibleTodos () {
        let {todoList, filter} = this.props;
        switch (filter) {
            case VisibilityFilters.SHOW_COMPLETED:
                return todoList.filter(t => t.isCompleted)
            case VisibilityFilters.SHOW_ACTIVE:
                return todoList.filter(t => !t.isCompleted)
            case VisibilityFilters.SHOW_ALL:
            default:
                return todoList
        }
    }

}

export default ListBlock;