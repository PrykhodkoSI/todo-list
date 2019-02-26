import { combineReducers } from 'redux'
import NotesList from './notesList'
import TodoList from './todoList'

export default combineReducers({
    NotesList,
    TodoList
})
