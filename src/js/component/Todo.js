import React from 'react'
import PropTypes from 'prop-types'

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.handleTodoClick = this.handleTodoClick.bind(this);
        this.handleRemoveTodoClick = this.handleRemoveTodoClick.bind(this);
    }

    handleTodoClick() {
        let todoId = this.props.todoId;
        this.props.onToggleTodo(todoId);
    }

    handleRemoveTodoClick() {
        let todoId = this.props.todoId;
        this.props.onRemoveTodo(todoId);
    }

    render() {
        let {isCompleted, text} = this.props;
        return <div>
            <li onClick={this.handleTodoClick}
                style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
                {text}</li>
            <button onClick={this.handleRemoveTodoClick}>Remove Todo</button>
        </div>
    }
}

Todo.propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo