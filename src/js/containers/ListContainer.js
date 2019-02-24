import {connect} from "react-redux";
import ListBlock from "../component/ListBlock"

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
};

export default connect(mapStateToProps)(ListBlock);