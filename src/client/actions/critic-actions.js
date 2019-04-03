import axios from 'axios'

import { GET_NBA, GET_NHL, GET_PGA } from './types'

export const getNba = () => dispatch => {
    axios.get('/api/nba')
        .then(res => dispatch({ type: GET_NBA, payload: res.data}))
        .catch(err => dispatch({type: GET_NBA, payload: {}}))
}

export const getNhl = () => dispatch => {
    axios.get('/api/nhl')
        .then(res => dispatch({ type: GET_NHL, payload: res.data}))
        .catch(err => dispatch({type: GET_NHL, payload: {}}))
}

export const getPga = () => dispatch => {
    axios.get('/api/pga')
        .then(res => dispatch({ type: GET_PGA, payload: res.data}))
        .catch(err => dispatch({type: GET_PGA, payload: {}}))
}