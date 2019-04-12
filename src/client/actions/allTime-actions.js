import axios from 'axios'

import { GET_NBA_ALLTIME, GET_NHL_ALLTIME, GET_PGA_ALLTIME } from './types'

const allTimeURL = 'http://localhost:4000/api/allTime'

export const getNbaAllTime = () => dispatch => {
    axios.get(`${allTimeURL}/nba`)
        .then(res => dispatch(receiveTreeData(res.data, GET_NBA_ALLTIME)))
        .catch(err => {throw(err)})
}

export const getNhlAllTime = () => dispatch => {
    axios.get(`${allTimeURL}/nhl`)
        .then(res => dispatch(receiveTreeData(res.data, GET_NHL_ALLTIME)))
        .catch(err => {throw(err)})
}

export const getPgaAllTime = () => dispatch => {
    axios.get(`${allTimeURL}/pga`)
        .then(res => dispatch(receiveTreeData(res.data, GET_PGA_ALLTIME)))
        .catch(err => {throw(err)})
}

export const receiveTreeData = (data, type) => ({
    type,
    data
})