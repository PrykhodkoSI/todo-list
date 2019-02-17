import React from 'react';

class Select extends React.Component {
    state = {

        toptions: ['B', 'A', 'C']
    };

    handleChange = (event) => {
        let select = event.target;
        if(select.options[0].value === ''){
            select.remove(0);
        }

        this.setState({ value: event.target.value });
    };

    render() {
        const { toptions } = this.state;
        let map = toptions.map(option => { return {key: option + "key", value: option}}).sort((a, b) =>  a.value > b.value? 1:-1);
        map.unshift({key: "", value: 'Select…'});
        return (
            <div>
                <select onChange={this.handleChange}>
                    {map.map(item => (
                        <option key={item.key} value={item.key}>
                            {item.value}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Select;