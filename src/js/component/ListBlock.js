import React from "react";
import VisibilityFilters from "../constants/VisibilityFilters"
import PropTypes from "prop-types";
import TodoContainer from "../containers/TodoContainer";
import FilterButton from "./FilterButton";

class ListBlock extends React.Component {

    constructor(props) {
        super(props);
        this.textBox = React.createRef();
        this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
    }

    handleAddTodoClick(event) {
        event.preventDefault();
        if (this.textBox.current) {
            const text = this.textBox.current.value.trim();
            if (!text) {
                return;
            }
            this.props.onAddTodo(text);
        }
    }

    handleSetShowAllFilter = () => {
        this.props.onSetVisibilityFilter(VisibilityFilters.SHOW_ALL);
    };

    handleSetShowActiveFilter = () => {
        this.props.onSetVisibilityFilter(VisibilityFilters.SHOW_ACTIVE);
    };

    handleSetShowCompletedFilter = () => {
        this.props.onSetVisibilityFilter(VisibilityFilters.SHOW_COMPLETED);
    };

    render() {
        if (this.props.selectedNote == null) return null;

        let todoList = this._getVisibleTodos();
        return <div className={"ListBlock"}>
            <ul>
                {Array.from(todoList).map(([id, value]) =>
                    <div key={id}>
                        <TodoContainer
                            todoId={id}
                            {...value}/>
                    </div>
                )}
            </ul>
            <input type={"text"} ref={this.textBox}/>
            <button onClick={this.handleAddTodoClick}>Add Todo</button>
            <div style={{marginTop: '10px'}}>
                <FilterButton onClick={this.handleSetShowAllFilter} text={"Show All"}/>
                <FilterButton onClick={this.handleSetShowActiveFilter} text={"Show Active"}/>
                <FilterButton onClick={this.handleSetShowCompletedFilter} text={"Show Completed"}/>
            </div>
        </div>
    }

    _getVisibleTodos() {
        let {todoList, filter} = this.props;
        switch (filter) {
            case VisibilityFilters.SHOW_COMPLETED:
                return new Map([...todoList].filter(([k, v]) => v.isCompleted));
            case VisibilityFilters.SHOW_ACTIVE:
                return new Map([...todoList].filter(([k, v]) => !v.isCompleted));
            case VisibilityFilters.SHOW_ALL:
            default:
                return todoList
        }
    }
}

ListBlock.propTypes = {
    todoList: PropTypes.objectOf(Map).isRequired,
    notesList: PropTypes.objectOf(Map),
    selectedNote: PropTypes.number,
    filter: PropTypes.string.isRequired,
};

export default ListBlock;