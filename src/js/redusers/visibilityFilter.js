import VisibilityFilters from '../constants/VisibilityFilters'
import Actions from '../constants/Actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case Actions.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
};

export default visibilityFilter