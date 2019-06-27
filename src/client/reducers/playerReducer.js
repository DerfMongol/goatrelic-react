import { GET_NBA_PLAYER, GET_NHL_PLAYER, GET_PGA_PLAYER } from '../actions/types'

const initialState = {
    nba: [], 
    nhl: [],
    pga: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_NBA_PLAYER: 
            return {
                ...state,
                nba: action.data
            }
        case GET_NHL_PLAYER: 
            return {
                ...state,
                nhl: action.data
            }
        case GET_PGA_PLAYER:
            return {
                ...state,
                pga: action.data
            }
        default: 
            return state
    }
}