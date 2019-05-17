import { FETCH_CURRENT_USER } from '../actions/types'

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER: 
            return {
                ...state,
                data: action.data || false
            } 
        default: 
            return state
    }
}