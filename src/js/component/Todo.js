import React from 'react'
import PropTypes from 'prop-types'

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {isCompleted, text} = this.props;
        return <li style={{
        textDecoration: isCompleted ? 'line-through' : 'none',
        margin: '1em'
        }}>{text}</li>
    }
}

Todo.propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Todo