import React from "react";
import VisibilityFilters from "../constants/VisibilityFilters"
import PropTypes from "prop-types";
import Todo from "./Todo";
import FilterButton from "./FilterButton";
import "../../css/component/ListBlock.css"

class ListBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textBox: ""
        };
        this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
    }

    handleAddTodoClick(event) {
        event.preventDefault();
        if (this.state.textBox) {
            const text = this.state.textBox.trim();
            if (!text) {
                return;
            }
            this.props.onAddTodo(text);
            this.state.textBox = "";
        }
    }

    handleRemoveTodoClick(id) {
        this.props.onRemoveTodo(id);
    }

    handleTodoClick(id) {
        this.props.onToggleTodo(id);
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
        let selectedNote = this.props.selectedNote; //TODO pass from local state of NotesListBlock ?
        if (selectedNote == null) return null;
        let todoList = this._getVisibleTodos(this.props.todoList, this.props.filter);

        return <table className={"ListBlock"}>
            <tbody>
            <tr>
                <td>
                    <h2>Todos:</h2>
                </td>
                <td>
                    <input
                        placeholder={"Type todo"}
                        type={"text"}
                        value={this.state.textBox}
                        onChange={(e) => this.setState({textBox: e.target.value})}/>
                </td>
                <td>
                    <button onClick={this.handleAddTodoClick}>Add Todo</button>
                </td>
            </tr>
            {
                Array.from(todoList).map(([id, value]) =>
                    <tr key={id}>
                        <td colSpan={2} onClick={this.handleTodoClick.bind(this, id)}>
                        <Todo {...value}/>
                        </td>
                        <td>
                        <button onClick={this.handleRemoveTodoClick.bind(this, id)}>Remove Todo</button>
                        </td>
                    </tr>
                )
            }
            <tr style={{marginTop: '10px'}}>
                <td colSpan={3}>
                    <FilterButton onClick={this.handleSetShowAllFilter} text={"Show All"}/>
                    <FilterButton onClick={this.handleSetShowActiveFilter} text={"Show Active"}/>
                    <FilterButton onClick={this.handleSetShowCompletedFilter} text={"Show Completed"}/>
                </td>
            </tr>
            </tbody>
        </table>
    }

    _getVisibleTodos(todoList, filter) {
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
    selectedNote: PropTypes.string,
    filter: PropTypes.string.isRequired,
};

export default ListBlock;