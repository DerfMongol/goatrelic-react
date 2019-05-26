import { FETCH_CURRENT_USER, POST_SPORT_LIST, DELETE_PLAYER } from '../actions/types'

const initialState = {
    data: {
        nhl: [],
        nba: [], 
        pga: []
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
        default: 
            return state
    }
}