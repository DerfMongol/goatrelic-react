import { GET_NBA_FANS, GET_NHL_FANS, GET_PGA_FANS, DELETE_FANS } from '../actions/types'

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
        case DELETE_FANS:
            console.log(state)
            return {
                ...state,
                ...state[action.data.sport].filter((fan) => fan.googleId !== action.data.id)
            }
        default: 
            return state
    }
}