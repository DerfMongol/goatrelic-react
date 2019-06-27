import { GET_NBAPLAYERS_ALLTIME, GET_NHLPLAYERS_ALLTIME, GET_PGAPLAYERS_ALLTIME } from './types'

export const getNbaPlayersAllTime = () => async (dispatch, getState, api) => {
    const res = await api.get(`/playersAllTime/nba`)
    dispatch(receiveTreeData(res.data, GET_NBAPLAYERS_ALLTIME))
}

export const getNhlPlayersAllTime = () => async (dispatch, getState, api) => {
    const res = await api.get(`/playersAllTime/nhl`)
    dispatch(receiveTreeData(res.data, GET_NHLPLAYERS_ALLTIME))
}

export const getPgaPlayersAllTime = () => async (dispatch, getState, api) => {
    const res = await api.get(`/playersAllTime/pga`)
    dispatch(receiveTreeData(res.data, GET_PGAPLAYERS_ALLTIME))
}

export const receiveTreeData = (data, type) => ({
    type,
    data
})