import Actions from "../constants/Actions";

const defaultState = {
    notesList: new Map(),
    selectedNote: null
};

const notesListReducer = (state = defaultState, action) => {
    console.log(state);
    switch (action.type) {
        case Actions.ADD_NOTE: {
            let notesList = new Map(state.notesList);
            notesList.set(action.payload.id, action.payload.name);
            return {
                ...state,
                notesList: notesList
            };
        }
        case Actions.REMOVE_NOTE: {
            let notesList = new Map(state.notesList);
            notesList.delete(Number(action.payload));
            return {
                ...state,
                notesList: notesList
            }
        }
        case Actions.SELECT_NOTE: {
            let id = Number(action.payload);
            return {
                ...state,
                selectedNote: id
            }
        }
        default:
            return state;
    }
};

export default notesListReducer