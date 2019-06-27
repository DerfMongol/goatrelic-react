import { GET_NBAPLAYERS_ALLTIME, GET_NHLPLAYERS_ALLTIME, GET_PGAPLAYERS_ALLTIME } from '../actions/types'

const initialState = {
    nba: [],
    nhl: [],
    pga: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NBAPLAYERS_ALLTIME:
            return {
                ...state,
                nba: action.data
            }
        case GET_NHLPLAYERS_ALLTIME:
            return {
                ...state,
                nhl: action.data
            }
        case GET_PGAPLAYERS_ALLTIME:
            return {
                ...state,
                pga: action.data
            }
        default:
            return state
    }
}