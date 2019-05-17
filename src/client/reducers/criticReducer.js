import { GET_NBA_CRITIC, GET_NHL_CRITIC, GET_PGA_CRITIC } from '../actions/types'

const initialState = {
    nba: [], 
    nhl: [],
    pga: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_NBA_CRITIC: 
            return {
                ...state,
                nba: action.data
            }
        case GET_NHL_CRITIC: 
            return {
                ...state,
                nhl: action.data
            }
        case GET_PGA_CRITIC:
            return {
                ...state,
                pga: action.data
            }
        default: 
            return state
    }
}