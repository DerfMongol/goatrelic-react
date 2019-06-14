import { GET_NBA_FANS, GET_NHL_FANS, GET_PGA_FANS } from '../actions/types'

const initialState = {
    nba: [], 
    nhl: [],
    pga: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_NBA_FANS: 
            return {
                ...state,
                nba: action.data
            }
        case GET_NHL_FANS: 
            return {
                ...state,
                nhl: action.data
            }
        case GET_PGA_FANS:
            return {
                ...state,
                pga: action.data
            }
        default: 
            return state
    }
}