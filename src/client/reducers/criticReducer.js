import { GET_NBA, GET_NHL, GET_PGA } from '../actions/types'

const initialState = {
    pga: null,
    nba: null, 
    nhl: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_NBA: 
            return {
                ...state,
                nba: action.payload
            }
        case GET_NHL: 
            return {
                ...state,
                nhl: action.payload
            }
        case GET_PGA:
            return {
                ...state,
                pga: action.payload
            }
        default: 
            return state
    }
}