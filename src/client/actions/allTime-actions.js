import { GET_NBA_ALLTIME, GET_NHL_ALLTIME, GET_PGA_ALLTIME } from './types'

export const getNbaAllTime = () => async (dispatch, getState, api) => {
    const res = await api.get(`/allTime/nba`)
    dispatch(receiveTreeData(res.data, GET_NBA_ALLTIME))
}

export const getNhlAllTime = () => async (dispatch, getState, api) => {
    const res = await api.get(`/allTime/nhl`)
    dispatch(receiveTreeData(res.data, GET_NHL_ALLTIME))
}

export const getPgaAllTime = () => async (dispatch, getState, api) => {
    const res = await api.get(`/allTime/pga`)
    dispatch(receiveTreeData(res.data, GET_PGA_ALLTIME))
}

export const receiveTreeData = (data, type) => ({
    type,
    data
})
