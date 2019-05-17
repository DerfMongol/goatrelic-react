import { GET_NBA_CRITIC, GET_NHL_CRITIC, GET_PGA_CRITIC } from './types'

export const getNbaCritic = () => async (dispatch, getState, api) => {
    const res = await api.get(`/critics/nba`)
    dispatch(receiveTreeData(res.data, GET_NBA_CRITIC))
}

export const getNhlCritic = () => async (dispatch, getState, api) => {
    const res = await api.get(`/critics/nhl`)
    dispatch(receiveTreeData(res.data, GET_NHL_CRITIC))
}

export const getPgaCritic = () => async (dispatch, getState, api) => {
    const res = await api.get(`/critics/pga`)
    dispatch(receiveTreeData(res.data, GET_PGA_CRITIC))
}

export const receiveTreeData = (data, type) => ({
    type,
    data
})

