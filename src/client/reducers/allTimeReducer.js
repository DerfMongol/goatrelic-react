import { GET_NBA_ALLTIME, GET_NHL_ALLTIME, GET_PGA_ALLTIME } from '../actions/types'

const initialState = {
    nba: [],
    nhl: [],
    pga: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NBA_ALLTIME:
            return {
                ...state,
                nba: action.data
            }
        case GET_NHL_ALLTIME:
            return {
                ...state,
                nhl: action.data
            }
        case GET_PGA_ALLTIME:
            return {
                ...state,
                pga: action.data
            }
        default:
            return state
    }
}