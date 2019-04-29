import axios from 'axios'

import { GET_NBA_ALLTIME, GET_NHL_ALLTIME, GET_PGA_ALLTIME } from './types'

const allTimeURL = 'http://localhost:4000/api/allTime'

export const getNbaAllTime = () => async dispatch => {
    const res = await axios.get(`${allTimeURL}/nba`)
    dispatch(receiveTreeData(res.data, GET_NBA_ALLTIME))
}

export const getNhlAllTime = () => async dispatch => {
    const res = await axios.get(`${allTimeURL}/nhl`)
    dispatch(receiveTreeData(res.data, GET_NHL_ALLTIME))
}

export const getPgaAllTime = () => async dispatch => {
    const res = await axios.get(`${allTimeURL}/pga`)
    dispatch(receiveTreeData(res.data, GET_PGA_ALLTIME))
}

export const receiveTreeData = (data, type) => ({
    type,
    data
})
