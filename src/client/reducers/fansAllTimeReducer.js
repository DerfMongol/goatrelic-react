import { GET_NBAFANS_ALLTIME, GET_NHLFANS_ALLTIME, GET_PGAFANS_ALLTIME } from '../actions/types'

const initialState = {
    nba: [],
    nhl: [],
    pga: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NBAFANS_ALLTIME:
            return {
                ...state,
                nba: action.data
            }
        case GET_NHLFANS_ALLTIME:
            return {
                ...state,
                nhl: action.data
            }
        case GET_PGAFANS_ALLTIME:
            return {
                ...state,
                pga: action.data
            }
        default:
            return state
    }
}