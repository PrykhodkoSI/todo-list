import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import NotesList from './notesList'
import TodoList from './todoList'

export default combineReducers({
    NotesList,
    TodoList,
    visibilityFilter
})
