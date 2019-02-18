let nextTodoId = 0;
let nextNoteId = 0;

export const addTodo = text => ({
    type: Actions.ADD_TODO,
    payload: nextTodoId++,
    text
});

export const removeTodo = id => ({
    type: Actions.REMOVE_TODO,
    payload: id
});

export const addNote = name => ({
    type: Actions.ADD_NOTE,
    payload: { id: nextNoteId++, name: name }
});

export const removeNote = id => ({
    type: Actions.REMOVE_NOTE,
    payload: id
});


export const setVisibilityFilter = filter => ({
    type: Actions.SET_VISIBILITY_FILTER,
    payload: filter
});

export const toggleTodo = id => ({
    type: Actions.TOGGLE_TODO,
    payload: id
});

export const Actions = {
    ADD_TODO: "ADD_TODO",
    REMOVE_TODO: "REMOVE_TODO",
    TOGGLE_TODO: "TOGGLE_TODO",
    SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
    ADD_NOTE: "ADD_NOTE",
    REMOVE_NOTE: "REMOVE_NOTE"
};

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};