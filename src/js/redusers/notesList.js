import Actions from "../constants/Actions";

const defaultState = {
    notesList: new Map()
};

const notesListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Actions.ADD_NOTE: {
            let notesList = state.notesList;
            notesList.set(action.payload.id, action.payload.name);
            return {
                ...state,
                notesList: notesList
            };
        }
        case Actions.REMOVE_NOTE: {
            let notesList = state.notesList;
            notesList.delete(action.payload);//remove(action.payload);
            return {
                ...state,
                notesList: notesList
            }
        }
        default:
            return state
    }
};

export default notesListReducer