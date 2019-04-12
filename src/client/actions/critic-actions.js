import axios from 'axios'

import { GET_NBA_CRITIC, GET_NHL_CRITIC, GET_PGA_CRITIC } from './types'

const criticURL = 'http://localhost:4000/api/critics'


export const getNbaCritic = () => dispatch => {
    axios.get(`${criticURL}/nba`)
        .then(res => dispatch(receiveTreeData(res.data, GET_NBA_CRITIC)))
        .catch(err => {throw(err)})
}

export const getNhlCritic = () => dispatch => {
    axios.get(`${criticURL}/nhl`)
        .then(res => dispatch(receiveTreeData(res.data, GET_NHL_CRITIC)))
        .catch(err => {throw(err)})
}

export const getPgaCritic = () => dispatch => {
    axios.get(`${criticURL}/pga`)
        .then(res => dispatch(receiveTreeData(res.data, GET_PGA_CRITIC)))
        .catch(err => {throw(err)})
}



export const receiveTreeData = (data, type) => ({
    type,
    data
})


//`${apiURL}/nhl`