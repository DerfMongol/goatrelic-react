import { FETCH_CURRENT_USER, POST_SPORT_LIST, FETCH_ALL_USERS } from '../actions/types'

const initialState = {
    data: {
        nhl: [],
        nba: [], 
        pga: [],
        users: []
    }
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER: 
            return {
                ...state,
                data: action.data || false
            } 
        case POST_SPORT_LIST: 
            return {
                ...state,
                nba: action.data.nba,
                nhl: action.data.nhl,
                pga: action.data.pga
            } 
        case FETCH_ALL_USERS:
            return {
                ...state,
                users: action.data
            }
        default: 
            return state
    }
}