import React from 'react'
import PropTypes from 'prop-types'

class Todo extends React.Component {

    constructor(props){
        super(props);

    }

    render() {
        let {onClick, isCompleted, text} = this.props;
        return <li onClick={onClick}
            style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
            {text}</li>
    }

}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo