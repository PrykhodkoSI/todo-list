import {connect} from "react-redux";
import NotesBlock from "../component/NotesBlock"

const mapStateToProps = (state) => {
    return {
        notesList: state.notesList
    }
};

export default connect(mapStateToProps)(NotesBlock);