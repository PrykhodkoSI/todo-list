import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import notes from './notesList'
import todos from './todoList'

export default combineReducers({
    notes,
    todos,
    visibilityFilter
})