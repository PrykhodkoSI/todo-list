import React from 'react'
import PropTypes from 'prop-types'

class FilterButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <button onClick={this.props.onClick} style={{marginLeft: '4px'}}>
            {this.props.text}
        </button>;
    }

}

FilterButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default FilterButton;