import axios from 'axios'

import { GET_NBA_CRITIC, GET_NHL_CRITIC, GET_PGA_CRITIC } from './types'

const criticURL = 'http://localhost:4000/api/critics'


export const getNbaCritic = () => async dispatch => {
    const res = await axios.get(`${criticURL}/nba`)
    dispatch(receiveTreeData(res.data, GET_NBA_CRITIC))
}

export const getNhlCritic = () => async dispatch => {
    const res = await axios.get(`${criticURL}/nhl`)
    dispatch(receiveTreeData(res.data, GET_NHL_CRITIC))
}

export const getPgaCritic = () => async dispatch => {
    const res = await axios.get(`${criticURL}/pga`)
    dispatch(receiveTreeData(res.data, GET_PGA_CRITIC))
}



export const receiveTreeData = (data, type) => ({
    type,
    data
})



//`${apiURL}/nhl`